import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    // Navigate to ChatBox with the uploaded file
    if (file) {
      navigate('/chat', { state: { file } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-maroon-500">
      <div className="absolute top-5 left-5 text-navy-800 text-2xl font-bold">Forman AI</div>
      <div className="p-10 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-navy-700">Upload Your Transcript</h2>
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 w-72 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        {file && <p className="text-green-500 mb-4">File: {file.name}</p>}
        <button 
          className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          onClick={handleFileUpload}
        >
          Upload and Proceed
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
