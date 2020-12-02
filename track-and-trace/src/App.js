  
import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard'
import WelcomePage from './pages/welcome'


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
        <WelcomePage />
      </div>
    );
  }
}

export default App;