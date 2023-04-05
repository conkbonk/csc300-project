import React, { useState } from 'react';

const fares = {
  bus: 2.75,
  commuterRail: 6.25,
  subway: 2.75,
  ferry: 2.75
};

const FareCalculator = () => {
  const [mode, setMode] = useState('bus');

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div>
      <h2>Fare Calculator</h2>
      <form>
        <label>
          Mode of transportation:
          <select value={mode} onChange={handleModeChange}>
            <option value="bus">Bus</option>
            <option value="commuterRail">Commuter Rail</option>
            <option value="subway">Subway</option>
            <option value="ferry">Ferry</option>
          </select>
        </label>
      </form>
      <p>Fare: ${fares[mode]}</p>
    </div>
  );
};

export default FareCalculator;
