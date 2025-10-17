import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfileLogin"; // ✅ rinominato correttamente
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticlesBackground"; // ✅ aggiunto sfondo futuristico

function App() {
  return (
    <Router>
      {/* Contenitore principale */}
      <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
        
        {/* 🔹 Sfondo animato con particelle */}
        <ParticleBackground />

        {/* 🔹 Contenuto principale sopra lo sfondo */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
