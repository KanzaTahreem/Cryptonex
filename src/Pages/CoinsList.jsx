import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CoinsData from '../components/CoinsData';
import Header from '../components/Header';
import '../styles/CoinsList.css';

const CryptoList = () => {
  const { filteredSearchArray, loading } = useSelector((state) => state.crypto);
  const navigate = useNavigate();
  const openCoinDetails = (coin) => {
    navigate('/details', {
      state: {
        coin,
      },
    });
  };
  return (

    <>
      <Header />
      <div className="coins-container">
        <ul className="list-container">
          {loading
            ? 'loading...'
            : filteredSearchArray.map((coin) => (
              <button key={coin.id} type="button" onClick={() => openCoinDetails(coin)} className="coin-button">
                <li className="coin-card">
                  <CoinsData
                    image={coin.image}
                    name={coin.name}
                  />
                </li>
              </button>
            ))}
        </ul>
      </div>

    </>
  );
};

export default CryptoList;
