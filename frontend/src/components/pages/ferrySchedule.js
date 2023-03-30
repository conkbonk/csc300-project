import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function FerryStops() {
  const [stops, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "https://api-v3.mbta.com/schedules?page%5Blimit%5D=50&include=stop&filter%5Broute%5D=Boat-F1%2C%20Boat-F2%2C%20Boat-F3%2C%20Boat-F4"
      );
      setAlerts(result.data.included);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1> Ferry Stops</h1>
      {stops.map((stop, index) => (
        <Card
          key={index}
          body
          outline
          bg="success"
          className="mx-1 my-2"
          style={{ width: "30rem" }}
        >
          <Card.Body>
            <Card.Title>Stop name: {stop.attributes.name}</Card.Title>
            <Card.Title>Address: {stop.attributes.address}</Card.Title>
            <Card.Title>Ferry: {stop.attributes.platform_name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FerryStops;
