import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Teams from './components/Teams/Teams';
import Players from './components/Players/Players';
import Standings from './components/Standings/Standings';
import TopScores from './components/Top Scores/TopScores';
import Trophies from './components/Trophies/Trophies';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="players" element={<Players />} />
        <Route path="standings" element={<Standings />} />
        <Route path="topscores" element={<TopScores />} />
        <Route path="trophies" element={<Trophies />} />
      </Routes>
    </>
  );
}

export default App;
