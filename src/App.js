import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CryptoList from './pages/CoinsList';
import CoinDetails from './pages/CoinDetails';
import TrendingList from './pages/TrendingList';
import fetchDataFromApi from './redux/AllCoins/thunk';
import fetchGLobalDataFromApi from './redux/Global/thunk';
import fetchTrendingDataFromApi from './redux/Trending/thunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGLobalDataFromApi());
    dispatch(fetchDataFromApi());
    dispatch(fetchTrendingDataFromApi());
  }, []);

  const setTheme = (theme) => document.firstElementChild.setAttribute('color-scheme', theme);

  const changeTheme = (e) => setTheme(e.target.checked ? 'dark' : 'light');
  return (
    <>
      <label className="switch" htmlFor="toggle">
        <input type="checkbox" id="toggle" onChange={changeTheme} />
        <span className="slider round" />
      </label>

      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/currencies" element={<CryptoList />} />
        <Route path="/details" element={<CoinDetails />} />
        <Route path="/trending-currencies" element={<TrendingList />} />
      </Routes>
    </>
  );
}

export default App;
