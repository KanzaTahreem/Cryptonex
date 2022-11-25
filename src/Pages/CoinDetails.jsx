import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import CoinChart from '../components/CoinChart';
import NumericData from '../components/NumericData';
import fetchChartFromApi from '../redux/CoinChart/thunk';
import '../styles/CoinDetails.css';

const CoinDetails = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchChartFromApi(location.state.coin.id));
  }, []);

  const handleBackBtn = () => navigate(-1);

  return (
    <section className="coin-deatils-container">
      <button type="button" onClick={handleBackBtn}>
        <IoIosArrowBack />
      </button>
      <NumericData />
      <CoinChart />
    </section>
  );
};

export default CoinDetails;
