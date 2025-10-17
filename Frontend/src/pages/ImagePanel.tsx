import { useState, useRef } from "react";
import Tesseract from "tesseract.js";
import axios from "axios";
import ResultCard from "../components/ResultCard";
import Button from "../components/Button";

export default function ImagePanel() {
  const [file, setFile] = useState<File | null>(null);
  const [converted, setConverted] = useState<string>("");
  const [loadingConv, setLoadingConv] = useState(false);
  const [loadingPred, setLoadingPred] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function handleConvert() {
    if (!file) return alert("Choose an image first.");
    setLoadingConv(true);
    try {
      const { data } = await Tesseract.recognize(file, "eng", {
        logger: (m) => console.log(m),
      });
      setConverted(data.text.trim());
    } catch (err) {
      console.error(err);
      alert("Image conversion failed.");
    } finally {
      setLoadingConv(false);
    }
  }

  async function handlePredict() {
    if (!converted.trim()) return alert("No text to predict.");
    setLoadingPred(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/predict`, {
        text: converted,
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    } finally {
      setLoadingPred(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-800 text-white border border-indigo-700">
      {/* Upload Section */}
      <div className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow p-5 border border-slate-700">
        <input
          ref={fileInputRef} 
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="block w-full text-gray-200 border border-indigo-600 rounded-lg cursor-pointer p-2 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <div className="flex gap-4 mt-4">
          <Button
            onClick={handleConvert}
            disabled={loadingConv}
            type="button"
            label={loadingConv ? "Converting..." : "Convert Image"}
            className="text-slate-900"
            color="blue"
          />

          <Button
            onClick={() => {
              setFile(null);
              setConverted("");
              setResult(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
            type="button"
            label="Clear"
            color="purple"
            className="bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg border border-slate-500"
          />
        </div>
      </div>

      {/* Converted Text Section */}
      {converted && (
        <div className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow p-5 border border-slate-700">
          <h4 className="font-semibold text-lg text-cyan-300 mb-2">
            📝 Converted Text (Editable)
          </h4>

          <textarea
            value={converted}
            onChange={(e) => setConverted(e.target.value)}
            rows={8}
            className="w-full p-3 border border-indigo-600 rounded-lg bg-slate-900 text-gray-100 shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none"
          />

          <div className="flex gap-4 mt-4">
            <Button
              onClick={handlePredict}
              disabled={loadingPred}
              type="button"
              label={loadingPred ? "Checking..." : "Check News"}
              color="green"
            />
          </div>
        </div>
      )}

      {/* Prediction Result */}
      {result && <ResultCard data={result} />}
    </div>
  );
}
