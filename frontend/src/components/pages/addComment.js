import React, { useState } from 'react';

function CommentForm() {
  const [formData, setFormData] = useState({
    username: '',
    stationName: '',
    comment: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8081/comment/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Station Name:
        <input
          type="text"
          name="stationName"
          value={formData.stationName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CommentForm;
