
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Background } from './components/Background';
import OurStory from './pages/OurStory';
import About from './pages/About';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative" style={{ backgroundColor: '#fff' }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Background />
                <Footer />
              </>
            } />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;