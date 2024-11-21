import React, { useState } from 'react';

const PersonInfo = ({ name, position, company, contact, email, location, profileLink }) => {

  const [currentPosition, setCurrentPosition] = useState(position);


  const handlePromotion = () => {
    if (currentPosition === "Software Engineer") {
      setCurrentPosition("Senior Software Engineer");
    } else if (currentPosition === "Senior Software Engineer") {
      setCurrentPosition("Lead Software Engineer");
    } else {
      setCurrentPosition("Engineering Manager");
    }
  };

  return (
    <div className="person-info">
      <h1>{name}</h1>
      <h2>{currentPosition} at {company}</h2>
      <ul>
        <li><strong>Contact:</strong> {contact}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Location:</strong> {location}</li>
        <li><strong>Profile:</strong> <a href={profileLink} target="_blank" rel="noopener noreferrer">Visit Profile</a></li>
      </ul>


      <button onClick={handlePromotion}>Повысить в должности</button>
    </div>
  );
};

export default PersonInfo;
