import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [personsState, setPersonsState] = useState({
      persons: [
        {name: 'Cody', age: 30},
        {name: 'Rick', age: 33},
        {name: 'Bob', age: 34}
      ],
      otherState: 'some other value'
    });

  const clickHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Dale', age: 30},
        {name: 'Rick', age: 33}, 
        {name: 'Bob', age: 34}
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className = "App">
      <h1>Hi, Im a React App</h1>
      <p>This is working.</p>
      <button onClick={clickHandler}>Click Me!</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>I like photography.</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  );
}

export default App;