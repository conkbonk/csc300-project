import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function OrangeStops() {
  const [stops, setAlerts] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/stops?include=route&filter%5Broute%5D=Blue',
      );
      setAlerts(result.data.data);
    }
    fetchData();
  }, []);


  return (
    
    <div>
      <h1> Blue Line Stops</h1>
      {stops.map(stop => (
        <Card
        body
        outline
        color="success"
        className="mx-1 my-2"
        style={{ width: "30rem" }}
      >
        <Card.Body>
        <Card.Title>Stop name: {stop.attributes.name}</Card.Title>
        <Card.Text>Address: {stop.attributes.address}</Card.Text>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}


export default OrangeStops;

