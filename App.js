import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Eric', age: 28},
    {name: 'Not Eric', age: 18},
    {name: 'Maybe Eric', age: 8}
    ],
    otherState: 'some other value'

  }
 

  switchNameHandler = (newName) => {
  // console.log('Was clicked!')
  //  DONT DO THIS this.state.persons[0].name = 'NEW'
  this.setState( {
    persons: [
    {name: newName, age: 28},
    {name: ' NEW Not Eric', age: 18},
    {name: 'New Maybe Eric', age: 8}
  ]
}) 

  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
      {name: 'Changed Again', age: 28},
      {name: event.target.value, age: 18},
      {name: 'New Maybe Eric', age: 8}
    ]
  }) 


  }
  render () {
    const style = {
      backgroundColor: `grey`,
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor:'pointer'


    };

    return (
      <div className="App">
        <h1>Hi, I am a React APP!</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Erica!')}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name = {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'New Otto')}
          changed={this.nameChangeHandler}> My Hobbies: coding </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement( 'h1', null, 'Does this work?'))
  }
}

export default App;
