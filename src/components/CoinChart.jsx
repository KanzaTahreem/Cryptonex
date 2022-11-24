import React from 'react';
import { useSelector } from 'react-redux';

const CoinChart = () => {
  const chartData = useSelector((state) => state.chart.dataArray.prices);

  return (
    <div>
      {
      chartData ? chartData.map((data) => (
        <div key={data[0] + data[1]}>
          {data[0]}
          { ' ' }
          {data[1]}
        </div>
      )) : 'Loading'
    }
    </div>
  );
};

export default CoinChart;
