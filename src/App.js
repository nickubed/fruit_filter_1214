import './App.css';
import React, { Component } from 'react'
import FruitContainer from './FruitContainer'

const fruits = [
  'pear',
  'orange',
  'mango',
  'lemon',
  'pineapple',
  'dragonfruit',
  'pomegranite',
  'soursop',
  'kiwi',
  'banana',
  'persimmon',
  'barf',
  'starfruit',
  'nectarine'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <FruitContainer fruits={fruits}/>
      </div>
    );
  }
}

export default App;