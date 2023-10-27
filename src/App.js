import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import ArtRoom from './components/ArtRoom';
import ScienceRoom from './components/ScienceRoom';

function App() {
  return (
    <Router>
    <div className="App">


      <nav>
<ul>
  <div><Link to="/">Home</Link></div>
  <div><Link to="/art">Art Room</Link></div>
  <div><Link to="/science">Science Room</Link></div>
  
</ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/art" element={<ArtRoom/>}></Route>
        <Route path="/science" element={<ScienceRoom/>}>
        </Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
