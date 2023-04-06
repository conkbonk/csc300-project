import React from 'react';
console.log("Hello, World!");

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
