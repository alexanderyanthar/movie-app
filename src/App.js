import './App.css';
import Catalogue from './components/Catalogue';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>HackFlix</h1>

      <Routes>
        <Route path='/' element={<Catalogue />} />
        <Route path='/movie/:movieID' element={<MovieDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
