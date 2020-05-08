import React, {useState} from 'react';
import './App.css';
import UserForm from './Components/UserForm';
// import PersonCard from './Components/PersonCard'
import Display from './Components/Display';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [users, setUsers] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let person = { fName: firstName, lName: lastName, email : email, password: password, confirmPass: confirmPass };
    setUsers(oldUsers => [...oldUsers, person]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  }

  return (
    <div className="App">
      <div className="m-5 test-center">
        <UserForm
          fName={firstName}
          lName={lastName}
          email={email}
          password={password}
          confirmPass={confirmPass}
          handleFirst={setFirstName}
          handleLast={setLastName}
          handleEmail={setEmail}
          handlePassword={setPassword}
          handleConfirmPass={setConfirmPass}
          addUser={handleSubmit}
        />
      </div>
        {
        users.map((user,idx) => {
          return <Display
            fName={user.fName}
            lName = {user.lName}
            email = {user.email}
            password = {user.password}
            confirmPass = {user.confirmPass}
            key={idx}
            />
        })
      }
      </div>
  );
}

export default App;
{/* <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown" /> 
        <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown" />  */}

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
