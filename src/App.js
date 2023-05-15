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
// import { fetchDetails } from './redux/detailsSlice';

import './styles/App.css';

function App() {
  const dispatch = useDispatch();
  // const { coinId } = useParams();

  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(fetchGlobalCurrencies());
    dispatch(fetchTrendingCurrencies());
    // dispatch(fetchDetails(coinId));
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
        <Route path="/home" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/currency/:coinId/details" element={<Details />} />
        <Route path="/trending-currencies" element={<Trending />} />
      </Routes>
    </>
  );
}

export default App;
