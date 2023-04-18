import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function UserHistory() {
  const [userHistory, setUserHistory] = useState([]);
  const [currentAction, setCurrentAction] = useState('');

  useEffect(() => {
    // load user history from local storage
    const storedHistory = localStorage.getItem('userHistory');
    if (storedHistory) {
      setUserHistory(JSON.parse(storedHistory));
    }

    // start tracking user activity
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleTabChange);

    // stop tracking user activity
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleTabChange);
    };
  }, []);

  useEffect(() => {
    // store user history in local storage
    localStorage.setItem('userHistory', JSON.stringify(userHistory));
  }, [userHistory]);

  const handleClick = (event) => {
    let action, details;
    const tagName = event.target.tagName;
    const href = event.target.getAttribute('href');
  
    switch (tagName) {
      case 'A':
        action = `Clicked on a link: ${href}`;
        break;
      case 'BUTTON':
        action = `Clicked on a button: ${event.target.textContent}`;
        break;
      case 'INPUT':
        action = `Typed into an input: ${event.target.value}`;
        details = `Input name: ${event.target.name}`;
        break;
      default:
        action = `Clicked on ${tagName}`;
    }
  
    addToUserHistory(action, details);
  };
  

  const handleKeyDown = (event) => {
    const action = `Pressed ${event.key}`;
    addToUserHistory(action);
  };

  const handleTabChange = () => {
    const action = 'Switched to another tab';
    addToUserHistory(action);
  };

  const addToUserHistory = (action) => {
    const date = new Date().toISOString();
    const details = '';
    const newItem = { date, action, details };
    setUserHistory(prevHistory => [...prevHistory, newItem]);
  };

  const handleClearHistory = () => {
    setUserHistory([]);
    localStorage.removeItem('userHistory');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">User History</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/contactUs">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-3">
        <h1>My User History</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {userHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.action}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="mt-3">
          <button className="btn btn-danger" onClick={handleClearHistory}>Clear History</button>
        </div>
      </div>
    </div>
  );
}

export default UserHistory;




