import { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";
import Button from "../components/Button";

export default function TextPanel() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!text.trim()) return alert("Please enter some text to check.");

    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/predict`, {
        text: text.trim(),
      });
      setResult(response.data);
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Prediction failed. Check your backend connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] text-white p-6 rounded-2xl shadow-xl">
      <form onSubmit={handleSubmit}>
        <textarea
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Paste your news/article text here..."
        />
        <div className="flex gap-3 mt-3 justify-center">
          <Button
            label={loading ? "Checking..." : "Check"}
            color="blue"
            disabled={loading}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md"
          />
          <Button
            label="Clear"
            color="cyan"
            onClick={() => setText("")}
            className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg shadow-md"
            type="button"
          />
        </div>
      </form>

      {result && <ResultCard data={result} />}
    </div>
  );
}
