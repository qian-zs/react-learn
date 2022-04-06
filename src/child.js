import React from "react";
import { connect } from 'react-redux';

class Child extends React.Component {
    render() {
        return (
            <div>
                Child<p>{this.props.text}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
    }
}

export default connect(mapStateToProps, null)(Child);