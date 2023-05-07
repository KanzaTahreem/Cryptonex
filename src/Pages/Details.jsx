import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import DetailsData from '../components/DetailsData';
import fetchChartFromApi from '../redux/CurrencyChart/thunk';
import '../styles/Details.css';

const Details = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchChartFromApi(location.state?.coin?.id));
  }, []);

  const handleBackBtn = () => navigate(-1);

  return (
    <section className="currency_details_container">
      <div className="back-btn">
        <button type="button" onClick={handleBackBtn}>
          <IoIosArrowBack />
          {' '}
          Back
        </button>
      </div>
      <DetailsData />
    </section>
  );
};

export default Details;
