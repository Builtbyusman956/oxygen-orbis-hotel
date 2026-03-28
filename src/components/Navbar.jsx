import Logo from "../assets/oxygenlogo.png";
import { useState } from "react";

const Navbar = () => {
  const [showWeather, setShowWeather] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-white backdrop-blur-md bg-white/10">
      <div className="flex md:w-1/3 md:justify-center">
        <img src={Logo} alt="logo" className="h-8 md:h-12 object-contain" />
      </div>
      <div className="flex items-center gap-2 md:gap-3 md:w-1/3 md:justify-end relative">
        <div className="relative">
          <button
            onClick={() => {
              setShowWeather(!showWeather);
              setShowSubscribe(false);
            }}
            className="px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-xs md:text-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="hidden sm:inline">Check Weather</span>
            <span className="sm:hidden">🌤</span>
          </button>

          {showWeather && (
            <div className="absolute right-0 mt-2 md:mt-3 w-52 md:w-56 rounded-xl p-3 md:p-4 backdrop-blur-lg bg-[#2a1f1a]/90 border border-white/10 text-xs md:text-sm">
              <p className="font-semibold">Ibadan</p>
              <p className="mt-1">🌤 28°C - Sunny</p>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => {
              setShowSubscribe(!showSubscribe);
              setShowWeather(false);
            }}
            className="px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-xs md:text-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="hidden sm:inline">Subscribe</span>
            <span className="sm:hidden">✉️</span>
          </button>

          {showSubscribe && (
            <div className="absolute right-0 mt-2 md:mt-3 w-56 md:w-64 rounded-xl p-3 md:p-4 backdrop-blur-lg bg-[#2a1f1a]/90 border border-white/10">
              <p className="text-xs md:text-sm mb-2">
                Get updates & offers
              </p>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-md text-black text-xs md:text-sm outline-none"
              />

              <button className="mt-2 md:mt-3 w-full bg-white text-black py-1.5 md:py-2 rounded-md text-xs md:text-sm hover:bg-white/90 transition">
                Subscribe
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;