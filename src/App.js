import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CryptoList from './pages/CoinsList';
import fetchDataFromApi from './redux/AllCoins/thunk';
import CoinDetails from './pages/CoinDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromApi());
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
        <Route path="/Crypto-Analysis" element={<CryptoList />} />
        <Route path="/details" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;
