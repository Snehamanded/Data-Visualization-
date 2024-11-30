import React, { useState } from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent'; // Import the ChartComponent

function App() {
  const [prompt, setPrompt] = useState('');
  const [chartData, setChartData] = useState(null); // Holds chart data
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate-chart-data', { prompt });
      setChartData(response.data.chartData); // Get generated chart data
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Data Visualization App</h1>

      <div>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
        />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Loading...' : 'Generate Chart'}
        </button>
      </div>

      {chartData && <ChartComponent chartData={chartData} />}
    </div>
  );
}

export default App;
