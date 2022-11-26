import millify from 'millify';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  BsGraphUp, BsGraphDown, BsCheck2All, BsHash, BsTagFill,
} from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im';
import { HiArrowNarrowUp, HiArrowNarrowDown } from 'react-icons/hi';
import { GiProgression } from 'react-icons/gi';
import { RiExchangeFundsFill } from 'react-icons/ri';
import {
  BiCoinStack, BiDollarCircle, BiDumbbell, BiLink,
} from 'react-icons/bi';
import '../styles/CoinDetails.css';
import { ExternalLink } from 'react-external-link';

const NumericData = () => {
  const location = useLocation();
  const { coin } = location.state || {};

  return (
    <div className="coin-details" data-testid="coin-stats">
      <div>
        <div className="coin">
          <div>
            <p className="name">
              {coin?.name}
              {' '}
              {`(${coin?.symbol?.toUpperCase()})`}
            </p>
            <img src={coin?.image} alt={`${coin?.image}-logo`} />
          </div>
        </div>

        <div className="other-stats">
          <div>
            <div className="other-stats-info">
              <p>
                <span><BsHash /></span>
                <span>Rank</span>
              </p>
              <p>{coin?.market_cap_rank}</p>
            </div>
            <div className="other-stats-info">
              <p>
                <span><BiDollarCircle /></span>
                <span>Price</span>
              </p>
              <p>{`$ ${millify(coin?.current_price)}`}</p>
            </div>
            <div className="other-stats-info">
              <p>
                <span><BiDumbbell /></span>
                <span>Total Volume</span>
              </p>
              <p>{`$ ${millify(coin?.total_volume)}`}</p>
            </div>
            <div className="other-stats-info">
              <p>
                <span><BsTagFill /></span>
                <span>Tags</span>
              </p>
              <p>{coin?.tags}</p>
            </div>
            <div className="other-stats-info">
              <p>
                <span><BiLink /></span>
                <span>Website</span>
              </p>
              <p><ExternalLink className="visit" href={coin?.website}>Visit</ExternalLink></p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="stats-title">
        More
        {' '}
        {coin?.name}
        {' '}
        {`(${coin?.symbol?.toUpperCase()})`}
        {' '}
        Statistics
      </h2>

      <div className="coin-stats">
        <div>
          <p className="stats-name">
            <span><GiProgression /></span>
            <span> Market Cap</span>
          </p>
          <p className="value">{`$ ${millify(coin?.market_cap)}`}</p>
        </div>

        <div>
          <p className="stats-name">
            <span><RiExchangeFundsFill /></span>
            <span>Market Cap Change</span>
          </p>
          <p className="value">
            {`$ ${millify(coin?.market_cap_change_24h)}`}
            {' / '}
            {`${millify(coin?.market_cap_change_percentage_24h)} %`}
          </p>
        </div>

        <div>
          <p className="stats-name">
            <span><BiCoinStack /></span>
            <span>Dilutated Value</span>
          </p>
          <p className="value">{`$ ${millify(coin?.fully_diluted_valuation)}`}</p>
        </div>

        <div>
          <p className="stats-name">
            <span><BsCheck2All /></span>
            <span>Total Supply</span>
          </p>
          <p className="value">{`$ ${millify(coin?.total_supply)}`}</p>
        </div>

        <div>
          <p className="stats-name">
            <span><HiArrowNarrowUp /></span>
            <span>24h High</span>
          </p>
          <p className="value">{`$ ${millify(coin?.high_24h)}`}</p>
        </div>

        <div>
          <p className="stats-name">
            <span><HiArrowNarrowDown /></span>
            <span>24h Low</span>
          </p>
          <p className="value">{`$ ${millify(coin?.low_24h)}`}</p>
        </div>

        <div>
          <p className="stats-name">
            <span><ImStatsBars /></span>
            <span>24h Price Change</span>
          </p>
          <p className="value">
            {`$ ${millify(coin?.price_change_24h)}`}
            {' / '}
            {`${millify(coin?.price_change_percentage_24h)} %`}
          </p>
        </div>

        <div>
          <p className="stats-name">
            <span><BsGraphUp /></span>
            <span>All Time High</span>
          </p>
          <p className="value">
            {`$ ${millify(coin?.ath)}`}
            {' / '}
            {`${millify(coin?.ath_change_percentage)} %`}
          </p>
        </div>

        <div>
          <p className="stats-name">
            <span><BsGraphDown /></span>
            <span>All Time Low</span>
          </p>
          <p className="value">
            {`$ ${millify(coin?.atl)}`}
            {' / '}
            {`${millify(coin?.atl_change_percentage)} %`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumericData;
