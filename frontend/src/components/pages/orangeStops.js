import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function OrangeStops() {
  const [stops, setStops] = useState([]);
  const [schedules, setSchedules] = useState({});

  useEffect(() => {
    async function fetchData() {
      const stopsResult = await axios(
        'https://api-v3.mbta.com/stops?include=route&filter%5Broute%5D=Orange',
      );
      setStops(stopsResult.data.data);

      const scheduleResult = await axios(
        'https://api-v3.mbta.com/schedules?filter%5Broute%5D=Orange',
      );
      const scheduleData = scheduleResult.data.data.reduce((acc, cur) => {
        const stopId = cur.relationships.stop.data.id;
        if (acc[stopId]) {
          acc[stopId].push(cur);
        } else {
          acc[stopId] = [cur];
        }
        return acc;
      }, {});
      setSchedules(scheduleData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Orange Line Stops</h1>
      {stops.map(stop => (
        <Card
          body
          outline
          color="success"
          className="mx-1 my-2"
          style={{ width: "30rem", backgroundColor: "orange" }}
          key={stop.id}
        >
          <Card.Body>
            <Card.Title>Stop name: {stop.attributes.name}</Card.Title>
            <Card.Text>Address: {stop.attributes.address}</Card.Text>
            {schedules[stop.id] && (
              <Card.Text>
                Next scheduled departure:{' '}
                {new Date(schedules[stop.id][0].attributes.departure_time).toLocaleTimeString()}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default OrangeStops;
