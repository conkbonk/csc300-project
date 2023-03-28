import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function FerryStops() {
  const [stops, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/stops?include=route&filter%5Broute%5D=Orange'
      );
      setAlerts(result.data.data);
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
            <Card.Title>Stop name:  {stop.attributes.name}</Card.Title>
            <Card.Text>Address: {stop.attributes.address}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FerryStops;
