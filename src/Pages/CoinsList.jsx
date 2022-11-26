import React from 'react';
import millify from 'millify';
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
        <ul className="list-container" data-testid="coins-list-container">
          {loading
            ? 'loading...'
            : filteredSearchArray.map((coin, index) => (index < 100
              ? (
                <button key={coin.id} type="button" onClick={() => openCoinDetails(coin)} className="coin-button">
                  <li className="coin-card">
                    <CoinsData
                      rank={coin?.market_cap_rank}
                      name={coin?.name}
                      image={coin?.image}
                      currentPrice={`$ ${millify(coin?.current_price)}`}
                    />
                  </li>
                </button>
              ) : ''
            ))}
        </ul>
      </div>

    </>
  );
};

export default CryptoList;
