import React from 'react';

const ticketFares = {
bus: {
oneWay: 1.75,
roundTrip: 3.50,
stops: [
    { name: 'Alewife', price: 1.75 },
            { name: 'Davis', price: 1.75 },
            { name: 'Porter', price: 1.75 },
            { name: 'Harvard', price: 1.75 },
            { name: 'Central', price: 1.75 },
            { name: 'Kendall/Mit', price: 1.75 },
            { name: 'Charles/MGH', price: 1.75 },
            { name: 'Park Street', price: 1.75 },
            { name: 'Downtown Crossing', price: 1.75 },
            { name: 'South Station', price: 1.75 },
            { name: 'Broadway', price: 1.75 },
            { name: 'Andrew', price: 1.75 },
            { name: 'JFK/UMASS', price: 1.75 },
            { name: 'Savin Hill', price: 1.75 },
            { name: 'Fields Corner', price: 1.75 },
            { name: 'Shawmut', price: 1.75 },
            { name: 'Ashmont', price: 1.75 },
            { name: 'North Quincy', price: 1.75 },
            { name: 'Wollaston', price: 1.75 },
            { name: 'Quincy Center', price: 1.75 },
            { name: 'Quincy Adams', price: 1.75 },
            { name: 'Braintree', price: 1.75 },
],
},
subway: {
oneWay: 3.75,
roundTrip: 7.50,
stops: [
    { name: 'Bowdoin', price: 3.75 },
    { name: 'Government Center', price: 3.75 },
    { name: 'State', price: 3.75 },
    { name: 'Aquarium', price: 3.75 },
    { name: 'Maverick', price: 3.75 },
    { name: 'Airport', price: 3.75 },
    { name: 'Wood Island', price: 3.75 },
    { name: 'Orient Heights', price: 3.75 },
    { name: 'Suffolk Downs', price: 3.75 },
    { name: 'Beachmont', price: 3.75 },
    { name: 'Revere Beach', price: 3.75 },
    { name: 'Wonderland', price: 3.75 },
],
},
commuterRail: {
oneWay: 6.25,
roundTrip: 12.50,
stops: [
    { name: 'Forest Hill', price: 6.25 },
    { name: 'Green Street', price: 6.25 },
    { name: 'Stony Brook', price: 6.25 },
    { name: 'Jackson Square', price: 6.25 },
    { name: 'Roxbury Crossing', price: 6.25 },
    { name: 'Massachusetts Avenue', price: 6.25 }

],
},
ferry: {
oneWay: 4.75,
roundTrip: 9.50,
stops: [
    { name: "Hingham", cost: 4.75 },
    { name: "Hull", cost: 5.50 },
    { name: "Logan Airport Ferry Terminal", cost: 18.00 },
    { name: "Long Wharf (North)", cost: 9.50 },
    { name: "Rowes Wharf", cost: 9.50 }
],
},
};
const TicketFares = () => {
return (
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '20px' }}>
<div>
<h2>Bus</h2>
<div>One Way: ${ticketFares.bus.oneWay}</div>
<div>Round Trip: ${ticketFares.bus.roundTrip}</div>
<div>
Stops:
<ul>
{ticketFares.bus.stops.map(stop => (
<li key={stop.name}>
{stop.name}: ${stop.price}
</li>
))}
</ul>
</div>
</div>
<div>
<h2>Subway</h2>
<div>One Way: ${ticketFares.subway.oneWay}</div>
<div>Round Trip: ${ticketFares.subway.roundTrip}</div>
<div>
Stops:
<ul>
{ticketFares.subway.stops.map(stop => (
<li key={stop.name}>
{stop.name}: ${stop.price}
</li>
))}
</ul>
</div>
</div>
<div>
<h2>Commuter Rail</h2>
<div>One Way: ${ticketFares.commuterRail.oneWay}</div>
<div>Round Trip: ${ticketFares.commuterRail.roundTrip}</div>
<div>
Stops:
<ul>
{ticketFares.commuterRail.stops.map(stop => (
<li key={stop.name}>
{stop.name}: ${stop.price}
</li>
))}
</ul>
</div>
</div>
<div>
<h2>Ferry</h2>
<div>One Way: ${ticketFares.ferry.oneWay}</div>
<div>Round Trip: ${ticketFares.ferry.roundTrip}</div>
<div>
Stops:
<ul>
{ticketFares.ferry.stops.map(stop => (
<li key={stop.name}>
{stop.name}: ${stop.price}
</li>
))}
</ul>
</div>
</div>
</div>
);
};

export default TicketFares;

