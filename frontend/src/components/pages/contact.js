import React, { useState } from 'react';

const MessageForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [stationName, setStationName] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8096/contact/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, stationName, message }),
      });
      if (response.ok) {
        // Comment added successfully
        alert('Message sent successfully!');
        // Clear form fields
        setName('');
        setEmail('');
        setStationName('');
        setMessage('');
      } else {
        // Handle error response
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      // Handle fetch error
      alert('Failed to connect to server. Please try again later.');
    }
  };

  return (
    <div>
    <h1>Contact Us</h1>
    <p>Please fill out the form below to get in touch with us.</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />

      <label htmlFor="stationName">Station Name:</label>
      <input type="text" id="stationName" name="stationName" value={stationName} onChange={(e) => setStationName(e.target.value)} />
      <br />
      <br />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <br />


      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default MessageForm;