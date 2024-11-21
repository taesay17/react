import React, { useState } from 'react';

const PersonInfo = ({ name, position, company, contact, email, location, profileLink }) => {

  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage(`Повысить в должности`);
  };

  return (
    <div className="person-info">
      <h1>{name}</h1>
      <h2>{position} at {company}</h2>
      <ul>
        <li><strong>Contact:</strong> {contact}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Location:</strong> {location}</li>
        <li><strong>Profile:</strong> <a href={profileLink} target="_blank" rel="noopener noreferrer">Visit Profile</a></li>
      </ul>

      {message && <p className="message">{message}</p>}

      <button onClick={handleClick}>Поприветствовать</button>
    </div>
  );
};

export default PersonInfo;
