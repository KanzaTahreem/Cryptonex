import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
);

const CoinChart = () => {
  const chartData = useSelector((state) => state.chart.dataArray.prices);
  const chartOptions = {
    scales: {
      y: {
        min: 0,
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
        },
        limits: {
          // axis limits
        },
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'x',
          },
        },
      },
    },
  };

  const [chartConfigData, setChartConfigData] = useState({
    labels: [],
    datasets: [{
      label: 'My First Dataset',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  });

  const [xAxisLabels, setXAxisLabel] = useState([]);

  const [yAxisLabels, setYAxisLabel] = useState([]);

  useEffect(() => {
    if (!chartData) {
      return;
    }
    const newXAxisLabels = [];
    const newYAxisLabels = chartData.map((data, index) => {
      xAxisLabels.push(`${chartData.length - index}d`);
      return data[1];
    });

    setXAxisLabel(newXAxisLabels);
    setYAxisLabel(newYAxisLabels);
    setChartConfigData({
      labels: xAxisLabels,
      datasets: [{
        label: 'My First Dataset',
        data: yAxisLabels,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }],
    });
    console.log('Called');
  }, [chartData]);

  return (
    <div style={{ width: '80vw' }}>
      <Line data={chartConfigData} options={chartOptions} />
    </div>
  );
};

export default CoinChart;
