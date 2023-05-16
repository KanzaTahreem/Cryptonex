import React from 'react';
import millify from 'millify';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { userInput } from '../redux/currenciesSlice';
import CurrencyData from '../components/CurrencyData';
import Loader from '../components/Loader';

const Currencies = () => {
  const { filteredSearchArray, loading, error } = useSelector((state) => state.currency);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(userInput(e.target.value));
  };

  const openCurrencyDetails = (coin) => {
    navigate(`/currency/${coin.id}/details`, { state: { coin } });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (

    <section className="coins_container">
      <header>
        <div>
          <h2 className="details_title title">
            Top 100 Crypto Currencies Data
          </h2>
          <h3 className="details_subtitle subtitle">
            A comprehensive overview of the top 100 cryptocurrencies, including their
            {' '}
            market capitalization, price trends, trading volumes, and key features
          </h3>
        </div>
        <div>
          <form>
            <input type="text" name="name" id="name" placeholder="Search here..." onChange={handleSearch} data-testid="input" />
            <BiSearch />
          </form>
        </div>
      </header>
      <main>
        <div className="currency-list">
          <div className="labels">
            <p>#</p>
            <p>Coin</p>
            <p>Sym</p>
            <p>Price</p>
            <p>1h</p>
            <p>24h</p>
            <p>7d</p>
            <p>24h Vol</p>
            <p>Mkt Cap</p>
          </div>
          <ul className="currencies" data-testid="coins-list-container">
            {filteredSearchArray.map((coin) => (
              <button key={coin.id} type="button" onClick={() => openCurrencyDetails(coin)} className="currency_btn">
                <li className="currency_card">
                  <CurrencyData
                    rank={millify(coin?.market_cap_rank)}
                    image={coin?.image}
                    name={coin?.name}
                    symbol={coin?.symbol}
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

export default Currencies;
