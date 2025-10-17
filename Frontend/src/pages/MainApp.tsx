import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftToolbar from "../components/LeftToolbar";
import TextPanel from "./TextPanel";
import ImagePanel from "./ImagePanel";
import LinkPanel from "./LinkPanel";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Mode = "text" | "image" | "link";

export default function MainApp() {
  const location = useLocation();
  const [mode, setMode] = useState<Mode>("text");

  useEffect(() => {
    // safer extraction of state
    const state = location.state as { mode?: Mode } | null;
    if (state?.mode && ["text", "image", "link"].includes(state.mode)) {
      setMode(state.mode);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-900 text-gray-100">
      <Header />

      <div className="flex flex-col md:flex-row flex-1 border-t border-cyan-500/20">
        <div className="w-full md:w-[20%] bg-gradient-to-b from-gray-900 via-purple-900 to-gray-950 text-white shadow-xl shadow-cyan-500/10 p-4">
          <LeftToolbar mode={mode} setMode={setMode} />
        </div>

        <div className="w-full md:w-[80%] flex-1 p-8 bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950 rounded-tl-3xl shadow-inner shadow-cyan-500/10 border-l border-cyan-500/10 transition-all duration-500">
          {mode === "text" && <TextPanel />}
          {mode === "image" && <ImagePanel />}
          {mode === "link" && <LinkPanel />}
        </div>
      </div>

      <Footer />
    </div>
  );
}
