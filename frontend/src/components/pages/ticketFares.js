import React from 'react';

const TicketFare = () => {
  const fares = [
    {
      type: 'Commuter rail',
      price: 200,
      available: true
    },
    {
      type: 'Ferry',
      price: 500,
      available: true
    },
    {
      type: 'Subway',
      price: 1000,
      available: false
    }
  ];

  return (
    <div>
      <h2>Ticket Fares</h2>
      <ul>
        {fares.map(fare => (
          <li key={fare.type}>
            <span>{fare.type}: </span>
            <span>{fare.price}$</span>
            {fare.available ? <span> Available</span> : <span> Sold Out</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketFare;
