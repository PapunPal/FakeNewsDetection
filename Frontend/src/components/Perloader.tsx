import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!loading) return null;

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-20 h-20 border-8 border-t-blue-500 border-b-pink-500 rounded-full"
      />
      <p className="absolute bottom-20 text-white text-lg animate-pulse">
        Loading Fake News AI...
      </p>
    </div>
  );
}
