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
          <div className="labels">
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>1h</p>
            <p>24h</p>
            <p>7d</p>
            <p>24h Vol</p>
            <p>Mkt Cap</p>
          </div>
          <ul className="currencies" data-testid="coins-list-container">
            {loading
              ? 'loading...'
              : filteredSearchArray.map((coin) => (
                <button key={coin.id} type="button" onClick={() => openCoinDetails(coin)} className="currency_btn">
                  <li className="currency_card">
                    <CoinsData
                      rank={millify(coin?.market_cap_rank)}
                      image={coin?.image}
                      name={coin?.name}
                      symbol={coin?.symbol.toUpperCase()}
                      currentPrice={`$ ${millify(coin?.current_price)}`}
                      oneHourPriceChange={`${millify(coin?.price_change_percentage_1h_in_currency)} %`}
                      oneDayPriceChange={`${millify(coin?.price_change_percentage_24h_in_currency)} %`}
                      oneWeekPriceChange={`${millify(coin?.price_change_percentage_7d_in_currency)} %`}
                      totalVolume={`$ ${millify(coin?.total_volume)}`}
                      marketCap={`$ ${millify(coin?.market_cap)}`}
                    />
                  </li>
                </button>
              ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default CryptoList;
