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
    this.setState({
      persons: [
        {name: 'Dale', age: 30},
        {name: 'Rick', age: 33},
        {name: 'Bob', age: 34}
      ]
    });
  }

  render() {
    return (
      <div className = "App">
        <h1>Hi, Im a React App</h1>
        <p>This is working.</p>
        <button onClick={this.clickHandler}>Click Me!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I like photography.</Person>
        <Person name="Rick" age="32"/>
        <Person name="Bob" age="33"/>
      </div>
    );
  }
}

export default App;