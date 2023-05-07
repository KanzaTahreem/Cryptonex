import millify from 'millify';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ImStatsBars } from 'react-icons/im';
import { GiProgression } from 'react-icons/gi';
import { RiExchangeFundsFill } from 'react-icons/ri';
import { MdSettingsBackupRestore, MdPriorityHigh } from 'react-icons/md';
import { HiArrowNarrowUp, HiArrowNarrowDown, HiOutlineGlobeAlt } from 'react-icons/hi';
import {
  BsGraphUp, BsGraphDown, BsCheck2All, BsHash,
} from 'react-icons/bs';
import {
  BiCoinStack, BiDollarCircle, BiDumbbell,
} from 'react-icons/bi';
import CurrencyChart from './CurrencyChart';

const DetailsData = () => {
  const location = useLocation();
  const { coin } = location.state || {};

  return (
    <>
      <div className="currency_price_chart">
        <h2 className="details_title">
          {coin?.name}
          {' '}
          {`(${coin?.symbol?.toUpperCase()})`}
          {' '}
          Price Chart
        </h2>
        <h3 className="details_subtitle">
          View the current live price of
          {' '}
          {coin?.name}
          {' '}
          is displayed in US dollars, providing real-time updates on the value of the cryptocurrency
        </h3>
        <CurrencyChart />
      </div>
      <div className="currency_price_statistics" data-testid="coin-stats">
        <h2 className="details_title">
          {coin?.name}
          {' '}
          {`(${coin?.symbol?.toUpperCase()})`}
          {' '}
          Statistics
        </h2>
        <h3 className="details_subtitle">
          An overview of
          {' '}
          {coin?.name}
          &apos;s statistics, including its market capitalization, trading volume, and price trends,
          {' '}
          provides valuable insights
        </h3>
        <div className="columns">
          <div className="left_col">
            <div>
              <p className="name">
                <span><BsHash /></span>
                <span>Rank</span>
              </p>
              <p className="value">{coin?.market_cap_rank}</p>
            </div>
            <div>
              <p className="name">
                <span><BiDollarCircle /></span>
                <span>Price</span>
              </p>
              <p className="value">{`$ ${millify(coin?.current_price)}`}</p>
            </div>
            <div>
              <p className="name">
                <span><GiProgression /></span>
                <span> Market Cap</span>
              </p>
              <p className="value">{`$ ${millify(coin?.market_cap)}`}</p>
            </div>

            <div>
              <p className="name">
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
              <p className="name">
                <span><HiArrowNarrowUp /></span>
                <span>24h High Price</span>
              </p>
              <p className="value">{`$ ${millify(coin?.high_24h)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><HiArrowNarrowDown /></span>
                <span>24h Low Price</span>
              </p>
              <p className="value">{`$ ${millify(coin?.low_24h)}`}</p>
            </div>

            <div>
              <p className="name">
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
              <p className="name">
                <span><BsGraphUp /></span>
                <span>All Time High Value</span>
              </p>
              <p className="value">
                {`$ ${millify(coin?.ath)}`}
                {' / '}
                {`${millify(coin?.ath_change_percentage)} %`}
              </p>
            </div>

            <div>
              <p className="name">
                <span><BsGraphDown /></span>
                <span>All Time Low Value</span>
              </p>
              <p className="value">
                {`$ ${millify(coin?.atl)}`}
                {' / '}
                {`${millify(coin?.atl_change_percentage)} %`}
              </p>
            </div>
          </div>

          <div className="right_col">
            <div>
              <p className="name">
                <span><BiCoinStack /></span>
                <span>Dilutated Valuation</span>
              </p>
              <p className="value">{`$ ${millify(coin?.fully_diluted_valuation)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><BiDumbbell /></span>
                <span>Total Volume</span>
              </p>
              <p className="value">{`$ ${millify(coin?.total_volume)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><HiOutlineGlobeAlt /></span>
                <span>Total Supply</span>
              </p>
              <p className="value">{`$ ${millify(coin?.total_supply)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><MdSettingsBackupRestore /></span>
                <span>Circulating Supply</span>
              </p>
              <p className="value">{`$ ${millify(coin?.circulating_supply)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><MdPriorityHigh /></span>
                <span>Maximum Supply</span>
              </p>
              <p className="value">{`$ ${millify(coin?.max_supply)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><BsCheck2All /></span>
                <span>Total Supply</span>
              </p>
              <p className="value">{`$ ${millify(coin?.total_supply)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsData;
