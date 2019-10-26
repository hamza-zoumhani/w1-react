import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import List from './components/list'

const data = {
  status:"success",
  message:"The click was successful"

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button data={data}></Button>
        <List></List>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
