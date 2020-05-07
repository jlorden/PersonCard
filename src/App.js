import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyNewComponent from './Components/MyNewComponent';
import PersonCard from './Components/PersonCard';




function App() {
  return (
    <div>
      <div>
        <h1>Here are some people</h1>
      </div>
      <div>
        <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown" /> 
        <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown" /> 

{/* //Note: we can pass down a string with or without curly braces. */}
 
          {/* lastName="Doe"
          firstName="Jane"
          age={45}
          hairColor="Black"
        /> */}
        {/* <PersonCard 
          lastName="Smith"
          firstName="John"
          age={88}
          hairColor="Brown"
        />
        <PersonCard 
          lastName="Fillmore"
          firstName="Millard"
          age={50}
          hairColor="Brown"
        />
        <PersonCard 
          lastName="Smith"
          firstName="Maria"
          age={62}
          hairColor="Brown"
        /> */}
        
      </div>
    </div>
  );
}

export default App;
