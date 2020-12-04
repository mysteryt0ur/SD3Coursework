  
import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard'
import WelcomePage from './pages/welcome'
import ProximityNotification from './components/ProximityNotification'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isUserRegistered: "true",
      matchFound: ""
    };
  }

  getProximityInfo = () => {
    setInterval(() => {
      // get proximity data //
    }, 1000)

    // if (proximity data shows a match) {
      // this.setState({ matchFound = "true" })
    // }
  }

  componentDidMount() {
    this.getProximityInfo()
  }

  render() {  
    return (
      <div className="App">
        {this.state.isUserRegistered === "false" &&
          <div>
            <WelcomePage />
          </div>
        }
        {this.state.matchFound === "true" &&
          <div>
            <ProximityNotification />
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