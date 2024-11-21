import React from 'react';
import PersonInfo from './components/PersonalInfo'; 

const App = () => {
  return (
    <div className="App">
      <PersonInfo
        name="Aikan Abdrashitova"
        position="Software Engineer"
        company="RedExpress"
        contact="+996551242402"
        email="aikan.abdrashitova@alatoo.edu.kg"
        location="Bishkek, Kyrgyzstan"
      />
    </div>
  );
};

export default App;
