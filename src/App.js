import pointerCustoms from './images/PointerCustoms.jpg';
import './App.css';
import ContactPage from './components/ContactPage';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <div className="App-body">
          <img src={pointerCustoms} alt="Pointer Customs" className="pointer-customs" />
          <Home />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
