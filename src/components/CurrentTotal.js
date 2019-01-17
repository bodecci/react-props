import React, { Component } from 'react';


class CurrentTotal extends Component {
    render() {
        return (

            <div>
                <h2>Current Total</h2>
                Current Total Props: {JSON.stringify(this.props)}
                <h3>{this.props.currentTotal}</h3>

            </div>
        )
    }
}

export default CurrentTotal;