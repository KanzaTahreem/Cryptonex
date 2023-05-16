import React from 'react';

const GlobalData = (props) => {
  const {
    activeCurrencies, endIcos, onIcos, comingIcos, markets,
    totalMarketCap, marketCapPercent, totalVolume,
  } = props;

  return (
    <>
      <div className="global-data-card">
        <p>Active Currencies</p>
        <p>{activeCurrencies}</p>
      </div>
      <div className="global-data-card" data-testid="global-data-card">
        <p>Ending Icos</p>
        <p>{endIcos}</p>
      </div>
      <div className="global-data-card" data-testid="global-data-card">
        <p>Ongoing Icos</p>
        <p>{onIcos}</p>
      </div>
      <div className="global-data-card" data-testid="global-data-card">
        <p>Upcoming Icos</p>
        <p>{comingIcos}</p>
      </div>
      <div className="global-data-card" data-testid="global-data-card">
        <p>Total Markets</p>
        <p>{markets}</p>
      </div>
      <div className="global-data-card" data-testid="global-data-card">
        <p>24h Market Change</p>
        <p>{marketCapPercent}</p>
      </div>
      <div className="global-data-card" data-testid="global-data-card">
        <p>Total Market Cap</p>
        <p>{totalMarketCap}</p>
      </div>
      <div className="global-data-card" data-testid="global-data-card">
        <p>Total Volume</p>
        <p>{totalVolume}</p>
      </div>
    </>
  );
};

export default GlobalData;
