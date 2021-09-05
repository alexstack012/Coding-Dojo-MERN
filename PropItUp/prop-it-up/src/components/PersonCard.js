
import React, { useState } from "react";

const PersonCardComponent = props => {
    const [state, setState] = useState({
        current_age: props.age
    });
    const ageClick = () => {
        setState({
            current_age: state.current_age + 1
        });
    };
    return (
        <div>
            <h1>
                {props.lastName}, {props.firstName}
            </h1>
            <p>Age: {state.current_age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ageClick}>
                Happy Birthday!!!
            </button>
        </div>
    );
};

// class PersonCard extends Component {
//     //declare constructor to overrride our default constructor so 
//     //that we can initiallyy set the state object
//     constructor(props) {
//         //gives us all the functionality of the default 
//         //constructor that comes with Component
//         super(props)
//         this.state = {
//             current_age: this.props.age
//         }
//     }
//     ageClick = () => {
//         this.setState({
//             current_age: this.state.current_age + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>Age: {this.state.current_age}</p>
//                 <p>Hair Color: {this.props.color}</p>
//                 <button onClick={this.ageClick}>BIRTHDAY BUTTON</button>
//             </div>
//         )
//     }
// }
export default PersonCardComponent