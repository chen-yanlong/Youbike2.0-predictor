import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './container/Home';
import Search from './container/Search';
import Stations from './container/Stations'

import './index.css';

function App() {
  return (
    
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/stations" element={<Stations/>} />
        </Routes>
      </Router>
    
  );
}

export default App;

