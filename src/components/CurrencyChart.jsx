import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-charts';
import '../styles/Details.css';

const CurrencyChart = () => {
  const chartData = useSelector((state) => state.chart.dataArray);

  const data = React.useMemo(
    () => {
      const mappedPrices = chartData.prices?.map((price, index) => [
        index === chartData.prices.length - 1 ? 'Today' : `${chartData.prices.length - index}d`,
        price[1],
      ]);
      return [
        {
          label: 'Series 1',
          data: mappedPrices || [],
        },
      ];
    },
    [chartData],
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  );

  return (
    <div
      style={{
        height: '400px',
      }}
    >
      { chartData.prices && chartData.prices.length ? <Chart data={data} axes={axes} /> : 'Loading...'}
    </div>
  );
};

export default CurrencyChart;
