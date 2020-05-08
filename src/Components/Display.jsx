import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Display = ({ fName, lName, email, password, confirmPass }) => {
    return (
    <div>
        <div class="">
            <p class="lead">{fName} {" "} {lName} </p>
            <p class="lead">{email}</p>
            <p class="lead">{password}</p>
            <p class="lead">{confirmPass}</p>
        </div>
    </div>
    );
}
export default Display;