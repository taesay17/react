import React from 'react';

const PersonInfo = ({ name, position, company, contact, email, location }) => {
  return (
    <div className="person-info">
      <h1>{name}</h1>
      <h2>{position} at {company}</h2>
      <ul>
        <li><strong>Contact:</strong> {contact}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Location:</strong> {location}</li>
      </ul>
    </div>
  );
};

export default PersonInfo;
