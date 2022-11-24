import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CoinChart from '../components/CoinChart';
import NumericData from '../components/NumericData';
import fetchChartFromApi from '../redux/CoinChart/thunk';
import '../styles/CoinDetails.css';

const CoinDetails = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchChartFromApi(location.state.coin.id));
  }, []);

  return (
    <section className="coin-deatils-container">
      <NumericData />
      <CoinChart />
    </section>
  );
};

export default CoinDetails;
