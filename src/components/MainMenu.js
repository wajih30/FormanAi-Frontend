import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="absolute top-5 left-5 text-white text-4xl font-bold">Forman AI</div>
      
      <div className="flex flex-col space-y-6">
        <button 
          className="px-8 py-4 bg-white text-black rounded-xl shadow-lg text-lg font-bold hover:bg-gray-200 transition duration-300"
          onClick={() => navigate('/chat')}
        >
          Chat with Bot
        </button>

        <button 
          className="px-8 py-4 bg-white text-black rounded-xl shadow-lg text-lg font-bold hover:bg-gray-200 transition duration-300"
          onClick={() => navigate('/select-major')}
        >
          Transcript Analysis and Advice
        </button>

        <button 
          className="px-8 py-4 bg-white text-black rounded-xl shadow-lg text-lg font-bold hover:bg-gray-200 transition duration-300"
          onClick={() => navigate('/select-major')}
        >
          Audit My Degree
        </button>
      </div>
    </div>
  );
};

export default MainMenu;


