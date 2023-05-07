import React from 'react';
import millify from 'millify';
import { useSelector } from 'react-redux';
// import Header from '../components/Header';
import headerImg from '../assets/images/header.png';
import GlobalData from '../components/GlobalData';
import '../styles/Header.css';
import '../styles/Main.css';

const Home = () => {
  const { globalArray } = useSelector((state) => state.global);
  return (
    <section className="homepage_container">
      <header>
        <div className="inner_header">
          <div>
            <h2>Hi, there 👋</h2>
            <p>
              Are you excited to kickstart your day with the fascinating world of cryptocurrencies?
              {' '}
              Let&apos;s dive into the fascinating world of cryptocurrencies together!
            </p>
          </div>
          <img src={headerImg} alt="girl working on laptop" />
        </div>
      </header>
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
      </main>
    </section>
  );
};

export default Home;
