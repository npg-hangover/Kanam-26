import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventHomepage from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Event from './Pages/Event';
import EventsList from './Pages/EventDetail';
import SponsorshipPage from './Pages/Sponsor';
import ConcertPage from './Pages/Concert';
import HackathonPage from './Pages/Hackathon';
import Members from './Pages/Members';
import NotFoundPage from './Pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<EventHomepage />} />
          <Route path="/events" element={<Event />} />
          <Route path="/event/:id" element={<EventsList />} />
          <Route path="/sponsors" element={<SponsorshipPage/>} />
          <Route path="/concert" element={<ConcertPage />} />
          <Route path="/hackathon" element={<HackathonPage />} />
          <Route path="/members" element={<Members/>} />
          {/* <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* Catch all route - 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}