import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SplashScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Aguarda o tempo da animação (1s) antes de navegar
      setTimeout(() => navigate("/home"), 1000); 
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-950 text-white font-black transition-all duration-1000 ${
        fadeOut ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center text-center px-4">
        <img
          src="./icons/loading.png"
          alt="Loading..."
          className="animate-spin-slow h-20 lg:h-70 mb-6"
        />
        <h1 className="text-[2rem] lg:text-7xl animate-fade-in-up mb-4">
          Welcome to my Portfolio
        </h1>
        <br />
        <p className="text-xl lg:text-4xl animate-pulse">
          Loading your personalized experience...
        </p>
      </div>
    </div>
  );
};