
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ResumePage from './pages/ResumePage';
import BioDataPage from './pages/BioDataPage';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<ResumePage />} />
          <Route path="/bio" element={<BioDataPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
