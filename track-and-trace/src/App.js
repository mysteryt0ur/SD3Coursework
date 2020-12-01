import './App.css';
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
      </div>
    );
  }
}

export default App;
