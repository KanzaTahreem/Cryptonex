import React from 'react';
import { useLocation } from 'react-router-dom';

const NumericData = () => {
  const location = useLocation();
  const { coin } = location.state;

  return (
    <>
      <div>{coin.id}</div>
      <div>
        <img src={coin.image} alt={`${coin.image}-logo`} />
        <p>
          {coin.name}
          /
          {coin.symbol}
        </p>
      </div>
      <div>
        <p>{`$${coin.current_price}`}</p>
        <p>
          market-cap:
          {' '}
          {coin.market_cap}
        </p>
        <p>
          market cap change:
          {' '}
          {coin.market_cap_change_24h}
        </p>
        <p>
          market change %:
          {' '}
          {coin.market_cap_change_percentage}
        </p>
        <p>
          rank:
          {' '}
          {coin.market_cap_rank}
        </p>
        <p>
          dilutated value:
          {' '}
          {coin.fully_diluted_valuation}
        </p>

        <p>
          high 24h:
          {' '}
          {coin.high_24h}
        </p>
        <p>
          low 24h:
          {' '}
          {coin.low_24h}
        </p>
        <p>
          price change 24h:
          {' '}
          {coin.price_change_24h}
        </p>
        <p>
          price change %:
          {' '}
          {coin.price_change_percentage_24h}
        </p>
        <p>
          total supply:
          {' '}
          {coin.total_supply}
        </p>
        <p>
          max supply:
          {' '}
          {coin.max_supply}
        </p>
        <p>
          ath:
          {' '}
          {coin.ath}
        </p>
        <p>
          ath change %:
          {' '}
          {coin.ath_change_percentage}
        </p>
        <p>
          last updated:
          {' '}
          {coin.last_updated}
        </p>
      </div>
    </>
  );
};

export default NumericData;
