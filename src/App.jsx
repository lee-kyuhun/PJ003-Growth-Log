import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DevLog from './pages/DevLog';
import DevLogPost from './pages/DevLogPost';
import Portfolio from './pages/Portfolio';
import MainLayout from './components/layout/MainLayout';

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/devlog" element={<DevLog />} />
                    <Route path="/devlog/:slug" element={<DevLogPost />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;
