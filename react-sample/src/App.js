import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Cody', age: 30},
      {name: 'Rick', age: 33},
      {name: 'Bob', age: 34}
    ]
  }

  clickHandler = () => {
    console.log('handler fired.');
  }

  render() {
    return (
      <div className = "App">
        <h1>Hi, Im a React App</h1>
        <p>This is really working.</p>
        <button onClick={this.clickHandler}>Click Me!</button>
        <Person name="Cody" age="30">I like photography.</Person>
        <Person name="Rick" age="32"/>
        <Person name="Bob" age="33"/>
      </div>
    );
  }
}

export default App;