import React, { useState } from 'react';
import {Button, Container, Form} from 'react-bootstrap';

const MessageForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8096/contact/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        // Comment added successfully
        alert('Message sent successfully!');
        // Clear form fields
        setName('');
        setEmail('');
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
    <Container>
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Name </Form.Label>
          <Form.Control
            className = 'w-25' type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
      <br />

      <Form.Group>
          <Form.Label> Email </Form.Label>
          <Form.Control
            className = 'w-25' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
      <br />

      <Form.Group>
          <Form.Label> Message </Form.Label>
          <Form.Control 
            className = 'w-50' style={{height:200}} id="message" as="textarea" rows="4" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
      <br />


      <Button variant='primary' type ='submit'>
        Submit
      </Button>
    </form>
    </Container>
  );
}

export default MessageForm;