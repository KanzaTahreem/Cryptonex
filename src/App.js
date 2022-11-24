import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import CryptoList from './Pages/CoinsList';
import fetchDataFromApi from './redux/AllCoins/thunk';
import CoinDetails from './Pages/CoinDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromApi());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/details" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;
