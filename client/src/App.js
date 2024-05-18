
import React from 'react';
import axios from 'axios';

function App() {
  const handleButtonClick = async () => {
    try {
      const response = await axios.patch('/api/market');
      alert(response.data.message);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  return (
    <div className="App">
      <h1>OpenBook Frontend</h1>
      <button onClick={handleButtonClick}>Test Backend</button>
    </div>
  );
}

export default App;
