import React, { useState } from 'react';
import {Button, Container, Form} from 'react-bootstrap';

function CommentForm() {
  const [username, setUsername] = useState('');
  const [stationName, setStationName] = useState('');
  const [comment, setComment] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8096/addComment/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, stationName, comment }),
      });
      if (response.ok) {
        // Comment added successfully
        alert('Message sent successfully!');
        // Clear form fields
        setUsername('');
        setStationName('');
        setComment('');
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
    <h1>Add Comment</h1>
    <form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label> Username: </Form.Label>
        <Form.Control
          className = 'w-25' type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
    <br />

    <Form.Group>
        <Form.Label> Station Name </Form.Label>
        <Form.Control
         className = 'w-25' type="text" id="stationName" name="stationName" value={stationName} onChange={(e) => setStationName(e.target.value)} />
      </Form.Group>
    <br />

    <Form.Group>
        <Form.Label> Comment: </Form.Label>
        <Form.Control 
          className = 'w-50' style={{height:200}} type='text' id="comment" as="textarea" rows="4" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      </Form.Group>
    <br />


    <Button variant='primary' type ='submit'>
      Submit
    </Button>
  </form>
  </Container>
  );
}

export default CommentForm;
