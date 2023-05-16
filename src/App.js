import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Currencies from './pages/Currencies';
import Details from './pages/Details';
import Trending from './pages/Trending';
import { fetchCurrencies } from './redux/currenciesSlice';
import { fetchGlobalCurrencies } from './redux/globalSlice';
import { fetchTrendingCurrencies } from './redux/trendingSlice';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(fetchGlobalCurrencies());
    dispatch(fetchTrendingCurrencies());
  }, []);

  const setTheme = (theme) => document.firstElementChild.setAttribute('color-scheme', theme);

  const changeTheme = (e) => setTheme(e.target.checked ? 'light' : 'dark');
  return (
    <>
      <label className="switch" htmlFor="toggle">
        <input type="checkbox" id="toggle" onChange={changeTheme} />
        <span className="slider round" />
      </label>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/currencies" element={<Currencies />} />
        <Route exact path="/currency/:coinId/details" element={<Details />} />
        <Route exact path="/trending-currencies" element={<Trending />} />
      </Routes>
    </>
  );
}

export default App;
