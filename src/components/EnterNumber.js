import React, { Component } from 'react';


class EnterNumber extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputNumber: 0,
        };
    }

        handleChange = (event) => {
            this.setState({
                // this will be a string
                inputNumber: parseInt(event.target.value)
            })
        }

        handleUpClick = () => {
            this.props.updateTotal(this.state.inputNumber);
        }

        handleDownClick = () => {
            this.props.updateTotal(0 - this.state.inputNumber);
        }

    render(){

        return(
            <div>
                EnterNumber state{JSON.stringify(this.state)}
                <button onClick={this.handleUpClick}>Up</button>
                <input onChange={this.handleChange} type="text" />
                <button onClick={this.handleDownClick}>Down</button>
            </div>

        )
    }
}

export default EnterNumber;