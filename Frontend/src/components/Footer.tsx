import { Link } from "react-router-dom";  
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden border-t border-cyan-500/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-4 left-6 w-10 h-10 bg-cyan-400 rounded-full blur-lg opacity-20"></div>
        <div className="absolute bottom-3 right-8 w-8 h-8 bg-pink-500 rounded-full blur-md opacity-30"></div>
        <div className="absolute top-4 left-1/4 w-6 h-6 bg-purple-400 rounded-full blur-sm opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">

          {/* Brand section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                TruthGuard AI
              </span>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Fighting misinformation with advanced AI technology
            </p>
          </div>

          {/* Quick links */}
           <div className="flex flex-col items-center space-y-3">
            <h4 className="font-semibold text-cyan-300 text-sm">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link to="/home/info" className="hover:text-cyan-200 transition-colors duration-200 hover:underline">About</Link>
              <Link to="/home/info" className="hover:text-cyan-200 transition-colors duration-200 hover:underline">Features</Link>
              <Link to="/home/info" className="hover:text-cyan-200 transition-colors duration-200 hover:underline">Privacy</Link>
              <Link to="/home/info" className="hover:text-cyan-200 transition-colors duration-200 hover:underline">Terms</Link>
              <Link to="/home/info" className="hover:text-cyan-200 transition-colors duration-200 hover:underline">Contact</Link>
              <Link to="/home/info" className="hover:text-cyan-200 transition-colors duration-200 hover:underline">Support</Link>
            </div>
          </div>

          {/* Social media links */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <h4 className="font-semibold text-purple-300 text-sm">Follow Us</h4>
            <div className="flex flex-wrap justify-center gap-2">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/papun-pal-247833285/" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition-all duration-200 group">
                <svg className="w-4 h-4 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/PapunPal" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-200 group">
                <svg className="w-4 h-4 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/papun.pal.73" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-200 group">
                <svg className="w-4 h-4 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/papun_.pal/?igsh=MTdsbXVxcHlvbzEwZg%3D%3D#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-200 group">
                <svg className="w-4 h-4 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 hover:scale-110 transition-all duration-200 group">
                <svg className="w-4 h-4 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-200 group">
                <svg className="w-4 h-4 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} TruthGuard AI. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>AI System Active</span>
              </span>
              <span>v2.1.4</span>
              {/* <a href="/sitemap" className="hover:text-cyan-200 transition-colors">Sitemap</a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60"></div>
    </footer>
  );
}