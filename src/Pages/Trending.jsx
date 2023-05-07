import React from 'react';
import millify from 'millify';
import { useSelector } from 'react-redux';
import TrendingData from '../components/TrendingData';
import '../styles/Main.css';
import '../styles/Details.css';

const Trending = () => {
  const { trendingArray, loading } = useSelector((state) => state.trending);

  return (
    <section className="trending_currency_list">
      <div>
        <h2 className="details_title">
          Trending Coins
        </h2>
        <h3 className="details_subtitle">
          A comprehensive overview of the current trending coins in the cryptocurrency market
          {' '}
          in last 24 hours
        </h3>
        <div className="labels">
          <p>Rank</p>
          <p>Coin</p>
          <p>Symbol</p>
          <p>Score</p>
        </div>
        <ul className="currencies">
          {loading
            ? 'loading...'
            : trendingArray?.coins?.map((coin) => (
              <div key={coin.item.id} className="currency_btn trending_btn">
                <li className="currency_card">
                  <TrendingData
                    rank={millify(coin?.item?.market_cap_rank)}
                    name={millify(coin?.item?.name)}
                    thumb={millify(coin?.item?.large)}
                    symbol={coin?.item?.symbol.toUpperCase()}
                    score={millify(coin?.item?.score)}
                  />
                </li>
              </div>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Trending;
