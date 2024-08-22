import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import VictoriaMemorialPage from './components/VictoriaMemorialPage';
import CharminarPage from './components/CharminarPage';
import HampiPage from './components/HampiPage';
import MysorePalacePage from './components/MysorePalacePage';
import IndiaGatePage from './components/IndiaGatePage';
import TajMahalPage from './components/TajMahalPage';
import QutubMinarPage from './components/QutubMinarPage';
import GolGumbazPage from './components/GolGumbazPage';
import JantarMantarPage from './components/JantarMantarPage';
import NalandaUniversityPage from './components/NalandaUniversityPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; // Import the SignUpPage component
import ContactsPage from './components/ContactsPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/victoria-memorial" element={<VictoriaMemorialPage />} />
          <Route path="/charminar" element={<CharminarPage />} />
          <Route path="/hampi" element={<HampiPage />} />
          <Route path="/mysore-palace" element={<MysorePalacePage />} />
          <Route path="/india-gate" element={<IndiaGatePage />} />
          <Route path="/taj-mahal" element={<TajMahalPage />} />
          <Route path="/qutub-minar" element={<QutubMinarPage />} />
          <Route path="/gol-gumbaz" element={<GolGumbazPage />} />
          <Route path="/jantar-mantar" element={<JantarMantarPage />} />
          <Route path="/nalanda-university" element={<NalandaUniversityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} /> {/* Add route for SignUpPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
