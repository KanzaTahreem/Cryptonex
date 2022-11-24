import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CoinsData from '../components/CoinsData';
import Header from '../components/Header';
import '../styles/CoinsList.css';

const CryptoList = () => {
  const { dataArray, loading } = useSelector((state) => state.crypto);

  const navigate = useNavigate();
  const openCoinDetails = (id) => {
    navigate('/details', {
      state: {
        id,
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
            : dataArray.map((coin) => (
              <button key={coin.id} type="button" onClick={() => openCoinDetails(coin.id)} className="coin-button">
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
