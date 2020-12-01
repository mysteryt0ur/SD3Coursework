import './App.css';
<<<<<<< HEAD
import WelcomePage from './pages/welcome/welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Track & Trace App</span>
      </header>
      <div>
        <WelcomePage />
=======
import React from 'react';
import Dashboard from './pages/dashboard'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: "dashboard"
    };
  }

  render() {  
    return (
      <div className="App">
        {this.state.activePage === "dashboard" && <Dashboard/>}
>>>>>>> master
      </div>
    );
  }
}

export default App;
