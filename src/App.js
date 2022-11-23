import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CryptoList from './Pages/CoinsList';
import fetchDataFromApi from './redux/AllCoins/thunk';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchDataFromApi());

  useEffect(() => {
    dispatch(fetchDataFromApi());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoList />} />
      </Routes>
    </>
  );
}

export default App;
