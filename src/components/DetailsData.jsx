import millify from 'millify';
import React from 'react';
import { ImStatsBars } from 'react-icons/im';
import { GiProgression } from 'react-icons/gi';
import { RiExchangeFundsFill } from 'react-icons/ri';
import {
  MdSettingsBackupRestore, MdPriorityHigh, MdOutlineForum, MdHome,
} from 'react-icons/md';
import { HiArrowNarrowUp, HiArrowNarrowDown, HiOutlineGlobeAlt } from 'react-icons/hi';
import { SiHiveBlockchain } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import {
  BsGraphUp, BsGraphDown, BsCheck2All, BsHash, BsFillChatDotsFill, BsReddit,
} from 'react-icons/bs';
import {
  BiCoinStack, BiDollarCircle, BiDumbbell, BiNews,
} from 'react-icons/bi';
import CurrencyChart from './CurrencyChart';

const DetailsData = (props) => {
  const {
    name, symbol, marketCapRank, currentPrice,
    marketCap, marketCapChange24h, high24h, low24h,
    priceChange24h, priceChangePercentage24h,
    marketCapChangePercentage24, ath, athChangePercentage,
    atl, atlChangePercentage, fullyDilutedValuation, totalVolume,
    totalSupply, circulatingSupply, maxSupply, publicInterestScore,
    description, homepage, blockChainSite, forum, chatUrl,
    announcementUrl, github, redditUrl,
  } = props;

  return (
    <>
      <div className="currency_price_chart">
        <h2 className="details_title">
          {name}
          {' '}
          {`(${symbol?.toUpperCase()})`}
          {' '}
          Price Chart
        </h2>
        <h3 className="details_subtitle">
          View the current live price of
          {' '}
          {name}
          {' '}
          is displayed in US dollars, providing real-time updates on the value of the cryptocurrency
        </h3>
        <CurrencyChart />
      </div>

      <div className="currency_price_statistics" data-testid="coin-stats">
        <h2 className="details_title">
          {name}
          {' '}
          {`(${symbol?.toUpperCase()})`}
          {' '}
          Statistics
        </h2>
        <h3 className="details_subtitle">
          An overview of
          {' '}
          {name}
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
              <p className="value">{marketCapRank}</p>
            </div>
            <div>
              <p className="name">
                <span><BiDollarCircle /></span>
                <span>Price</span>
              </p>
              <p className="value">{`$ ${millify(currentPrice)}`}</p>
            </div>
            <div>
              <p className="name">
                <span><GiProgression /></span>
                <span> Market Cap</span>
              </p>
              <p className="value">{`$ ${millify(marketCap)}`}</p>
            </div>
            <div>
              <p className="name">
                <span><RiExchangeFundsFill /></span>
                <span>Market Cap Change</span>
              </p>
              <p className="value">
                {`$ ${millify(marketCapChange24h)}`}
                {' / '}
                {`${millify(marketCapChangePercentage24)} %`}
              </p>
            </div>
            <div>
              <p className="name">
                <span><HiArrowNarrowUp /></span>
                <span>24h High Price</span>
              </p>
              <p className="value">{`$ ${millify(high24h)}`}</p>
            </div>
            <div>
              <p className="name">
                <span><HiArrowNarrowDown /></span>
                <span>24h Low Price</span>
              </p>
              <p className="value">{`$ ${millify(low24h)}`}</p>
            </div>
            <div>
              <p className="name">
                <span><ImStatsBars /></span>
                <span>24h Price Change</span>
              </p>
              <p className="value">
                {`$ ${millify(priceChange24h)}`}
                {' / '}
                {`${millify(priceChangePercentage24h)} %`}
              </p>
            </div>
            <div>
              <p className="name">
                <span><BsGraphUp /></span>
                <span>All Time High Value</span>
              </p>
              <p className="value">
                {`$ ${millify(ath)}`}
                {' / '}
                {`${millify(athChangePercentage)} %`}
              </p>
            </div>
            <div>
              <p className="name">
                <span><BsGraphDown /></span>
                <span>All Time Low Value</span>
              </p>
              <p className="value">
                {`$ ${millify(atl)}`}
                {' / '}
                {`${millify(atlChangePercentage)} %`}
              </p>
            </div>
          </div>

          <div className="right_col">
            <div>
              <p className="name">
                <span><BiCoinStack /></span>
                <span>Dilutated Valuation</span>
              </p>
              <p className="value">{`$ ${millify(fullyDilutedValuation)}`}</p>
            </div>
            <div>
              <p className="name">
                <span><BiDumbbell /></span>
                <span>Total Volume</span>
              </p>
              <p className="value">{`$ ${millify(totalVolume)}`}</p>
            </div>
            <div>
              <p className="name">
                <span><HiOutlineGlobeAlt /></span>
                <span>Total Supply</span>
              </p>
              <p className="value">{`$ ${millify(totalSupply)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><MdSettingsBackupRestore /></span>
                <span>Circulating Supply</span>
              </p>
              <p className="value">{`$ ${millify(circulatingSupply)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><MdPriorityHigh /></span>
                <span>Maximum Supply</span>
              </p>
              <p className="value">{`$ ${millify(maxSupply)}`}</p>
            </div>

            <div>
              <p className="name">
                <span><BsCheck2All /></span>
                <span>Interest Score</span>
              </p>
              <p className="value">{publicInterestScore}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="other_info">
        <h2 className="details_title">
          {name}
          {' '}
          {`(${symbol?.toUpperCase()})`}
          {' '}
          Additional Information
        </h2>
        <div className="columns">
          <div className="description">
            {description}
          </div>
          <div className="links">
            <div>
              <p className="name">
                <span><MdOutlineForum /></span>
                <span>Official Forum</span>
              </p>
              <p className="value">{forum}</p>
            </div>
            <div>
              <p className="name">
                <span><MdHome /></span>
                <span>Homepage</span>
              </p>
              <p className="value">{homepage}</p>
            </div>
            <div>
              <p className="name">
                <span><SiHiveBlockchain /></span>
                <span>Blockchain</span>
              </p>
              <p className="value">{blockChainSite}</p>
            </div>
            <div>
              <p className="name">
                <span><BsFillChatDotsFill /></span>
                <span>Chat</span>
              </p>
              <p className="value">{chatUrl}</p>
            </div>
            <div>
              <p className="name">
                <span><BiNews /></span>
                <span>News</span>
              </p>
              <p className="value">{announcementUrl}</p>
            </div>
            <div>
              <p className="name">
                <span><AiFillGithub /></span>
                <span>GitHub</span>
              </p>
              <p className="value">{github}</p>
            </div>
            <div>
              <p className="name">
                <span><BsReddit /></span>
                <span>Reddit</span>
              </p>
              <p className="value">{redditUrl}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsData;
