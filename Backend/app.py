from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
from newspaper import Article

# ======================
# 🔹 Load Model & Tokenizer
# ======================
model = load_model("fake_news_lstm_model.h5")

with open("tokenizer.pkl", "rb") as f:
    tokenizer = pickle.load(f)

max_len = 200  # same as training

# ======================
# 🔹 Flask App Setup
# ======================
app = Flask(__name__)
CORS(app)


# ======================
# ✅ Home Route
# ======================
@app.route("/")
def home():
    return "🧠 Fake News Detection API is Running!"


# ======================
# ✅ Predict Route
# ======================
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(force=True)
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided!"}), 400

    seq = tokenizer.texts_to_sequences([text])
    pad = pad_sequences(seq, maxlen=max_len, padding='post', truncating='post')
    prediction = model.predict(pad)[0][0]
    label = "REAL" if prediction >= 0.5 else "FAKE"

    return jsonify({
        "prediction": label,
        "confidence": float(prediction)
    })


# ======================
# ✅ Extract Route (Link → Text)
# ======================
@app.route("/extract", methods=["POST"])
def extract_text():
    try:
        data = request.get_json()
        url = data.get("url")

        if not url:
            return jsonify({"error": "URL is required"}), 400

        # --- Try using Newspaper3k for clean article extraction ---
        article = Article(url)
        article.download()
        article.parse()

        text = article.text.strip()

        # --- Fallback to BeautifulSoup if newspaper fails ---
        if not text:
            html = requests.get(url).text
            soup = BeautifulSoup(html, "html.parser")
            text = " ".join([p.get_text() for p in soup.find_all("p")])

        if not text:
            return jsonify({"error": "Could not extract readable text."}), 400

        return jsonify({"text": text})

    except Exception as e:
        print("Extraction error:", e)
        return jsonify({"error": str(e)}), 500


# ======================
# 🚀 Run App
# ======================
if __name__ == "__main__":
    app.run(debug=True)
