import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainMenu from './components/MainMenu';
import ChatBox from './components/ChatBox';
import MajorsSelect from './components/MajorsSelect';
import FileUpload from './components/FileUpload';

const ChatPage = () => {
  const location = useLocation();
  const file = location.state?.file;
  return <ChatBox file={file} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/select-major" element={<MajorsSelect />} />
        <Route path="/upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}

export default App;

