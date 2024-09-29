import React, { useState } from 'react';

const ChatBox = ({ file }) => {
  const [messages, setMessages] = useState(file ? [
    { text: `You uploaded ${file.name}`, sender: 'user' },
    { text: 'Analyzing your file...', sender: 'bot' }
  ] : []);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "Analyzing your query...", sender: 'bot' }]);
      }, 1000); // Simulate bot response
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="bg-black text-white py-3 px-6 text-xl font-bold text-left">
        Forman AI
      </div>
      
      <div className="flex-grow p-6 overflow-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-4 rounded-lg max-w-xs ${
                msg.sender === 'user' ? 'bg-white text-black' : 'bg-gray-800 text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-900 flex">
        <input
          type="text"
          className="flex-grow p-3 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="ml-4 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
