import { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

export default function LinkPanel() {
  const [url, setUrl] = useState("");
  const [extracted, setExtracted] = useState("");
  const [loadingConv, setLoadingConv] = useState(false);
  const [loadingPred, setLoadingPred] = useState(false);
  const [result, setResult] = useState<any>(null);

  // Extract text from URL
  async function handleExtract() {
    if (!url.trim()) return alert("Enter a valid URL.");
    setLoadingConv(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/extract`, { url });
      setExtracted(res.data.text || "");
    } catch (err) {
      console.error(err);
      alert("Failed to extract text from the link.");
    } finally {
      setLoadingConv(false);
    }
  }

  // Send extracted text to backend for prediction
  async function handlePredict() {
    if (!extracted.trim()) return alert("No text available for prediction.");
    setLoadingPred(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/predict`, { text: extracted });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    } finally {
      setLoadingPred(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] text-white p-6 rounded-2xl shadow-xl">
      {/* URL input section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-cyan-400">🔗 Link to Text</h2>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
          placeholder="https://example.com/article"
        />
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleExtract}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition duration-200"
            disabled={loadingConv}
          >
            {loadingConv ? "Extracting..." : "Fetch & Extract"}
          </button>
          <button
            onClick={() => {
              setUrl("");
              setExtracted("");
              setResult(null);
            }}
            className="px-4 py-2 border border-gray-400 hover:bg-gray-700 rounded-lg transition duration-200"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Extracted text section */}
      {extracted && (
        <div>
          <h4 className="font-semibold text-cyan-300 mt-6">📝 Extracted Text (Editable)</h4>
          <textarea
            value={extracted}
            onChange={(e) => setExtracted(e.target.value)}
            rows={8}
            className="w-full p-3 mt-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <div className="flex gap-3 mt-3">
            <button
              onClick={handlePredict}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition duration-200"
              disabled={loadingPred}
            >
              {loadingPred ? "Checking..." : "Check Fake News"}
            </button>
          </div>
        </div>
      )}

      {/* Prediction Result */}
      {result && <ResultCard data={result} />}
    </div>
  );
}
