import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

    
const UserForm = ({ fName, lName, email, password, confirmPass, handleFirst, handleLast, handleEmail, handlePassword, handleConfirmPass, createUser}) => {

    return (
        <form onSubmit = {(e) => createUser(e)}>
            <input
                type="text"
                name="firstName"
                value={fName}
                placeholder="First Name:"
                onChange = {(e) => handleFirst(e.target.value)}
            />
            <input
                type="text"
                name="lastName"
                value={lName}
                placeholder="First Name:"
                onChange = {(e) => handleLast(e.target.value)}
            />
            <input
                type="text"
                name="email"
                value={email}
                placeholder="Your Email:"
                onChange = {(e) => handleEmail(e.target.value)}
            />
            <input
                type="text"
                name="password"
                value={password}
                placeholder="Enter your password:"
                onChange = {(e) => handlePassword(e.target.value)}
            />
            <input
                type="text"
                name="confirmPass"
                value={confirmPass}
                placeholder="Confirm your Password:"
                onChange = {(e) => handleConfirmPass(e.target.value)}
            />
            <input
                type="submit"
                value="submit"
            />
        </form>
    )
}


export default UserForm;