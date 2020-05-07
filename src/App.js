import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyNewComponent from './Components/MyNewComponent';
import PersonCard from './Components/PersonCard';




function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Here are some people</h1>
      </div>
      <div className="row">
        <PersonCard 
          lastName="Doe,"
          firstName="Jane"
          age={45}
          hairColor="Black"
        />
        <PersonCard 
          lastName="Smith,"
          firstName="John"
          age={88}
          hairColor="Brown"
        />
        <PersonCard 
          lastName="Fillmore,"
          firstName="Millard"
          age={50}
          hairColor="Brown"
        />
        <PersonCard 
          lastName="Smith,"
          firstName="Maria"
          age={62}
          hairColor="Brown"
        />
        
      </div>
    </div>
  );
}

export default App;
