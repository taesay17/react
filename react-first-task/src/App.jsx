import React from 'react';
import PersonInfo from './components/PersonalInfo'; 
import './App.css';  

const App = () => {
  return (
    <div className="App">
      <h1>Информация о человеке</h1>
      <PersonInfo
        name="John Doe"
        position="Software Engineer" 
        company="TechCorp"
        contact="123-456-7890"
        email="johndoe@example.com"
        location="New York, USA"
        profileLink="https://www.linkedin.com/in/johndoe" 
      />
    </div>
  );
};

export default App;
