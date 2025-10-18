import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white p-3 relative overflow-visible">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-cyan-400 rounded-full blur-lg opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-pink-500 rounded-full blur-lg opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-400 rounded-full blur-md opacity-20 animate-ping"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="container mx-auto flex justify-between items-center relative z-20">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300 pointer-events-none"></div>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
            Fake News Detector
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-4 text-base">
          <Link to="/" className="relative px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group">
            Home
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 -z-10 pointer-events-none"></div>
          </Link>
          <Link to="/home/main" className="relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border border-cyan-300/50 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 group font-semibold">
            Try Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors z-30"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`sm:hidden fixed top-16 left-0 w-full bg-gradient-to-b from-indigo-900 to-purple-900 backdrop-blur-lg border-b border-white/20 transition-all duration-300 z-50
        ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <nav className="container mx-auto p-4 flex flex-col space-y-3">
          <Link
            to="/"
            className="px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/home/main"
            className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl border border-cyan-300/50 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 group font-semibold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Try Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
