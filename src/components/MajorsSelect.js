import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MajorsSelect = () => {
  const [major, setMajor] = useState('');
  const navigate = useNavigate();

  // Updated list of major options
  const majorOptions = [
    "Computer Science",
    "Biology",
    "Physics",
    "Business",
    "Chemistry",
    "Economics",
    "Education",
    "English",
    "Environmental Sciences",
    "Geography",
    "History",
    "Mass Communication",
    "Mathematics",
    "Philosophy",
    "Political Science",
    "Psychology",
    "Religious Studies (Isl)", // Islamic Studies
    "Religious Studies (Crst)", // Christian Studies
    "Sociology",
    "Statistics",
    "Urdu",
  ];

  const handleMajorSelect = (e) => {
    setMajor(e.target.value);
  };

  const handleNext = () => {
    if (major) {
      navigate('/upload');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="absolute top-5 left-5 text-white text-2xl font-bold">Forman AI</div>
      <label className="text-3xl mb-6">Select Your Major</label>
      <select
        className="p-3 rounded-lg border-2 border-white bg-gray-900 text-white focus:outline-none focus:border-blue-500"
        onChange={handleMajorSelect}
      >
        <option value="">Select...</option>
        {majorOptions.map((major, index) => (
          <option key={index} value={major}>
            {major}
          </option>
        ))}
      </select>
      <button
        className="mt-6 px-8 py-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default MajorsSelect;

