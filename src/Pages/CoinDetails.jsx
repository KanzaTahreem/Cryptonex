import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import NumericData from '../components/NumericData';
import fetchChartFromApi from '../redux/CoinChart/thunk';
import '../styles/CoinDetails.css';
// import CoinChart from '../components/CoinChart';

const CoinDetails = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchChartFromApi(location.state?.coin?.id));
  }, []);

  const handleBackBtn = () => navigate(-1);

  return (
    <section className="coin-details-container">
      <div className="back-btn">
        <button type="button" onClick={handleBackBtn}>
          <IoIosArrowBack />
        </button>
      </div>
      <NumericData />
      {/* <CoinChart /> */}
    </section>
  );
};

export default CoinDetails;
