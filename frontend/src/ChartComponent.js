import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartComponent = ({ chartData }) => {
  // Assume chartData is a string and convert it to a valid chart object
  // Here we're assuming the format is like: "labels: [Jan, Feb, Mar], data: [10, 20, 30]"
  const parsedData = JSON.parse(chartData); // Be sure to adjust to actual response format
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <h2>Generated Chart</h2>
      {/* Render Bar Chart (or any other chart) based on parsed data */}
      <Bar data={parsedData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
