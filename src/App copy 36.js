import React from 'react';
import './App.css';

function CustomTextInput(props) {
    console.log(props.inputRef);
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el} />
        );
    }
}

export default Parent;