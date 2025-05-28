import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        navigate('/home');
      }, 500);
    }, 2500); // Increased to 2.5 seconds to show animations better

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-main/5 via-white to-primary-main/10 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className={`transform transition-all duration-700 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-main to-primary-dark flex items-center justify-center mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <span className="text-white text-5xl font-extrabold tracking-wider">M</span>
        </div>
      </div>
      
      <div 
        className={`transform transition-all duration-700 delay-200 text-center ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-bold text-primary-main mb-6 tracking-tight text-center">
          MessMate
        </h1>
        <p className="text-2xl text-gray-600 font-medium tracking-wide text-center">
          What would you eat today?
        </p>
      </div>

      {/* Loading indicator */}
      <div 
        className={`mt-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-16 h-1 bg-gradient-to-r from-primary-main/20 via-primary-main to-primary-main/20 rounded-full overflow-hidden">
          <div className="w-full h-full bg-primary-main animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen; 