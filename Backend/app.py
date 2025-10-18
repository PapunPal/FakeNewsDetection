from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import os

# remove heavy top-level TF / newspaper imports
# lazy placeholders
model = None
tokenizer = None
_pad_sequences = None
max_len = 200  # same as training

def ensure_model_loaded():
    global model, tokenizer, _pad_sequences
    if model is None:
        # import heavy libs only when needed
        from tensorflow.keras.models import load_model
        from tensorflow.keras.preprocessing.sequence import pad_sequences as _ps
        import pickle
        model = load_model("fake_news_lstm_model.h5")
        with open("tokenizer.pkl", "rb") as f:
            tokenizer = pickle.load(f)
        _pad_sequences = _ps

# Flask app
app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "🧠 Fake News Detection API is Running!"

@app.route("/predict", methods=["POST"])
def predict():
    ensure_model_loaded()
    try:
        data = request.get_json(force=True)
        text = data.get("text", "")
        if not text:
            return jsonify({"error": "No text provided!"}), 400

        seq = tokenizer.texts_to_sequences([text])
        pad = _pad_sequences(seq, maxlen=max_len, padding="post", truncating="post")

        # wrap model call in try to catch TF errors / OOM
        try:
            pred = model.predict(pad)
            prediction = float(pred[0][0])
        except Exception as m_err:
            import traceback
            traceback.print_exc()
            return jsonify({"error": "Model inference failed", "details": str(m_err)}), 500

        label = "REAL" if prediction >= 0.5 else "FAKE"
        return jsonify({"prediction": label, "confidence": prediction})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": "Internal server error", "details": str(e)}), 500

@app.route("/extract", methods=["POST"])
def extract_text():
    try:
        data = request.get_json()
        url = data.get("url")
        if not url:
            return jsonify({"error": "URL is required"}), 400

        # import newspaper inside route to avoid startup import issues
        try:
            from newspaper import Article
            article = Article(url)
            article.download()
            article.parse()
            text = article.text.strip()
        except Exception:
            text = ""

        # fallback to BeautifulSoup
        if not text:
            html = requests.get(url, timeout=10).text
            soup = BeautifulSoup(html, "html.parser")
            text = " ".join([p.get_text() for p in soup.find_all("p")]).strip()

        if not text:
            return jsonify({"error": "Could not extract readable text."}), 400

        return jsonify({"text": text})
    except Exception as e:
        # print("Extraction error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # keep for local dev only
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=False, use_reloader=False)
