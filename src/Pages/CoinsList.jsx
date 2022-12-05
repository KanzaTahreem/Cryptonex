import React from 'react';
import millify from 'millify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CoinsData from '../components/CoinsData';
import Header from '../components/Header';
import GlobalData from '../components/GlobalData';
import '../styles/Main.css';

const CryptoList = () => {
  const { filteredSearchArray, loading } = useSelector((state) => state.crypto);
  const { globalArray } = useSelector((state) => state.global);

  const navigate = useNavigate();
  const openCoinDetails = (coin) => {
    navigate('/details', {
      state: {
        coin,
      },
    });
  };
  return (

    <section className="homepage-container">
      <Header />
      <main>
        <section>
          <div className="global-data">
            <GlobalData
              activeCurrencies={millify(globalArray?.data?.active_cryptocurrencies)}
              endIcos={millify(globalArray?.data?.ended_icos)}
              onIcos={millify(globalArray?.data?.ongoing_icos)}
              comingIcos={millify(globalArray?.data?.upcoming_icos)}
              markets={millify(globalArray?.data?.markets)}
              marketCapPercent={millify(globalArray?.data?.market_cap_percentage.btc)}
              totalMarketCap={millify(globalArray?.data?.total_market_cap?.usd)}
              totalVolume={millify(globalArray?.data?.total_volume.btc)}
            />
          </div>
          <div className="currency-list">
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
        </section>
      </main>
    </section>
  );
};

export default CryptoList;
