import millify from 'millify';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { fetchChart } from '../redux/chartSlice';
import DetailsData from '../components/DetailsData';
import { fetchDetails } from '../redux/detailsSlice';
import Loader from '../components/Loader';

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { coinId } = useParams();

  useEffect(() => {
    dispatch(fetchChart(location.state?.coin?.id));
  }, []);

  useEffect(() => {
    dispatch(fetchDetails(coinId));
  }, []);

  const { detailsArray, loading, error } = useSelector((state) => state.details);

  const handleBackBtn = () => navigate(-1);

  const renderLink = (url, label) => {
    if (url && url.length > 0) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return 'Null';
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="currency_details_container">
      <div className="back-btn">
        <button type="button" onClick={handleBackBtn}>
          <IoIosArrowBack />
          {' '}
          Back
        </button>
      </div>
      <DetailsData
        name={detailsArray?.name}
        symbol={detailsArray?.symbol}
        marketCapRank={millify(detailsArray?.market_cap_rank)}
        high24h={detailsArray?.market_data?.high_24h?.usd}
        low24h={detailsArray?.market_data?.low_24h?.usd}
        ath={detailsArray?.market_data?.ath?.usd}
        atl={detailsArray?.market_data?.atl?.usd}
        marketCap={detailsArray?.market_data?.market_cap?.usd}
        marketCapChange24h={detailsArray?.market_data?.market_cap_change_24h_in_currency?.usd}
        marketCapChangePercentage24={detailsArray?.market_data?.market_cap_change_percentage_24h_in_currency?.usd}
        priceChange24h={detailsArray?.market_data?.price_change_24h_in_currency?.usd}
        priceChangePercentage24h={detailsArray?.market_data?.price_change_percentage_24h_in_currency?.usd}
        currentPrice={detailsArray?.market_data?.current_price?.usd}
        athChangePercentage={detailsArray?.market_data?.ath_change_percentage?.usd}
        atlChangePercentage={detailsArray?.market_data?.atl_change_percentage?.usd}
        fullyDilutedValuation={detailsArray?.market_data?.fully_diluted_valuation?.usd}
        totalVolume={detailsArray?.market_data?.total_volume?.usd}
        totalSupply={detailsArray?.market_data?.total_supply}
        circulatingSupply={detailsArray?.market_data?.circulating_supply}
        maxSupply={detailsArray?.market_data?.max_supply}
        publicInterestScore={detailsArray?.public_interest_score}
        description={ReactHtmlParser(detailsArray?.description?.en || 'No description available at the moment. Please try again later!')}
        homepage={renderLink(detailsArray?.links?.homepage[0], 'Visit')}
        blockChainSite={renderLink(detailsArray?.links?.blockchain_site[0], 'Visit')}
        forum={renderLink(detailsArray?.links?.official_forum_url[0], 'Visit')}
        chatUrl={renderLink(detailsArray?.links?.chat_url[0], 'Visit')}
        announcementUrl={renderLink(detailsArray?.links?.announcement_url[0], 'Visit')}
        github={renderLink(detailsArray?.links?.repos_url?.github[0], 'Visit')}
        redditUrl={renderLink(detailsArray?.links?.subreddit_url, 'Visit')}
      />
    </section>
  );
};

export default Details;
