import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );

    // birthday = () => {
    //     this.state.currentAge < 100 ? this.setState({ currentAge: this.state.currentAge + 1 }) : alert("You have another life");
    // }
    // render() {
    //     return (
    //     <div>
    //         <div>
    //         <div>
    //             <h2>
    //             Name:{ " " }
    //             {this.props.firstName} { " " }
    //             {this.props.lastName}
    //             </h2>
    //         </div>
    //         <p>Age: {this.state.currentAge}</p>
    //         <p>Hair Color: {this.props.hairColor}</p>
    //         <button
    //             onClick= {this.birthday}
    //         >
    //             birthday
    //         </button>
    //         </div>
    //     </div>
    //     );
    // }
}

export default PersonCard