import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/main-menu');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-maroon-500 text-white">
      <h1 className="text-6xl font-extrabold mb-4 text-navy-800 animate-pulse">Forman AI</h1>
      <p className="text-xl mb-8 animate-pulse">Welcome!</p>
      <button 
        className="px-8 py-3 bg-white text-navy-800 font-semibold text-lg  rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
