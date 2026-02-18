import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Placeholder Components for Routing
const Home = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 mb-4 animate-fade-in-up">
      Welcome to Meta-Log
    </h1>
    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
      The future of cognitive logging. Stay tuned for Task 03.
    </p>
  </div>
);

const DevLog = () => (
  <div className="py-10">
    <h2 className="text-3xl font-bold mb-6">DevLog</h2>
    <p className="text-gray-400">Developer logs will appear here soon (Task 04).</p>
  </div>
);

const Portfolio = () => (
  <div className="py-10">
    <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
    <p className="text-gray-400">Project gallery coming soon (Task 05).</p>
  </div>
);

const About = () => (
  <div className="py-10">
    <h2 className="text-3xl font-bold mb-6">About</h2>
    <p className="text-gray-400">About Meta-Log.</p>
  </div>
);


const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
    <p className="text-xl text-gray-400">Page Not Found</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="devlog" element={<DevLog />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
