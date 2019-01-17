import React, { Component } from 'react';
import './App.css';
import EnterNumber from './components/EnterNumber'
import CurrentTotal from './components/CurrentTotal';

class App extends Component {

    constructor(){
      super();
      this.state = {
        total: 0,
      }
    }

      updateTotal = (inputNumber) => {
        console.log('Updating Total with, ', inputNumber);
        this.setState({
          total: this.state.total + inputNumber,
        });
      }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Props Activity</h1>
        </header>
        App State: {JSON.stringify(this.state)}
        <EnterNumber updateTotal={this.updateTotal} />
        <hr></hr>
        <CurrentTotal currentTotal={this.state.total}/>
      </div>
    );
  }
}

export default App;
