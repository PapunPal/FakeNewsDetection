# FakeNewsDetection

Lightweight web app that classifies news as **FAKE** or **REAL** using a trained LSTM model.  
Workflows: text input, image (OCR → text → predict), and URL extraction.

## Features
- Text detection (paste/type)
- Image OCR (Tesseract) → prediction
- Link extraction (newspaper3k / BeautifulSoup) → prediction
- REST API: `/predict` (POST), `/extract` (POST)

## Quickstart

Prerequisites:
- Python 3.10+
- Node.js & npm
- (optional) Tesseract installed for OCR if used client-side

Backend
```powershell
cd Backend
python -m venv venv
# PowerShell
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```
Frontend
```bash
cd Frontend
npm install
# dev server
npm run dev
```
Set VITE_API_URL (frontend) to your backend URL, e.g. `http://127.0.0.1:5000`.

## API
- POST /predict — body: { "text": "..." } → { label, confidence }
- POST /extract — body: { "url": "..." } → { text }

## Deployment notes
- Do NOT commit `venv/`. Use `requirements.txt` + Procfile/runtime.txt for hosting.
- Recommended: deploy backend to Render/Railway/Docker (TensorFlow models are large). Deploy frontend to Vercel/Netlify and point to backend URL.

## Privacy & Disclaimer
Demo/research use only. Model is experimental and may be incorrect. Do not treat as a substitute for professional fact-checking.

## Contact
Papun Pal — papunpal38029@gmail.com — +91 6295804056

## License
MIT
