import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Currencies from './pages/Currencies';
import Details from './pages/Details';
import Trending from './pages/Trending';
import fetchDataFromApi from './redux/AllCurrencies/thunk';
import fetchGLobalDataFromApi from './redux/GlobalCurrencies/thunk';
import fetchTrendingDataFromApi from './redux/TrendingCurrencies/thunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromApi());
    dispatch(fetchGLobalDataFromApi());
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
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/details" element={<Details />} />
        <Route path="/trending-currencies" element={<Trending />} />
      </Routes>
    </>
  );
}

export default App;
