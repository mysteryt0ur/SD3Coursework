  
import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard'
import WelcomePage from './pages/welcome'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isUserRegistered: "false"
    };
  }

  render() {  
    return (
      <div className="App">
        {this.state.isUserRegistered === "false" &&
          <div>
            <WelcomePage />
          </div>
        } 
        {this.state.isUserRegistered === "true" &&
          <div>
            <Dashboard />
          </div>
        }
      </div>
    );
  }
}

export default App;