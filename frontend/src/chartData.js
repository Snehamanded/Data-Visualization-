const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate-chart-data', { prompt });
      const data = response.data.chartData;
      console.log(data);  // Add this line to log the chart data
      setChartData(data); // Set the chart data state
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
    setLoading(false);
  };
  