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

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Crypto-Analysis" element={<CryptoList />} />
        <Route path="/details" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;
