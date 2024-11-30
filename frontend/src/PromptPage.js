import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PromptPage = () => {
  const [prompt, setPrompt] = useState('');
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate-chart-data', { prompt });
      const data = response.data.chartData;
      setChartData(data);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Enter Prompt for Chart</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt for chart"
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Generate Chart'}
      </button>

      {chartData ? (
        <div>
          <h2>Generated Chart</h2>
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      ) : (
        <div>
          <h2>Enter a prompt and generate the chart!</h2>
        </div>
      )}
    </div>
  );
};

export default PromptPage;
