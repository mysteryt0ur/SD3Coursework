  
import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard'
import WelcomePage from './pages/welcome'
import ProximityNotification from './components/ProximityNotification'
import Firebase from 'firebase'
import config from './firebase'
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
var CryptoJS = require("crypto-js");
var axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    } else {
      Firebase.app(); // if already initialized, use that one
    }
    this.state = {
      isUserRegistered: true,
      matchFound: "",
      isAppLoading: true,
    };
  }

  getRandomCode = () => {
    let code = Math.floor(100000 + Math.random() * 9000000000);
    console.log(code)
    return this.hashCode(code)
  }

  hashCode = (unhashedCode) => {
    let key = `${process.env.ENCRYPTION_KEY}`
    let encrypted = CryptoJS.AES.encrypt(unhashedCode.toString(), key).toString();
    console.log("getting new code")
    return encrypted
  }

  getAppCode = () => {
    if ("tandt-appName" in localStorage) {
      let appCode = localStorage.getItem('tandt-appName')
      console.log(appCode)
      this.getFlaggedAccounts(appCode)
    } else {
      let newCode = this.getRandomCode()
      localStorage.setItem('tandt-appName', newCode)
    }
  }

  getFlaggedAccounts = (appCode) => {
    let data = '{"1": ' + appCode + '}';

    var config = {
      method: 'post',
      url: 'https://tandt-flagged-accounts-api.web-sandpit.sandpit.rscomp.systems/',
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getProximityInfo = () => {
    setInterval(() => {
      // get proximity data //
    }, 1000)

    // if (proximity data shows a match) {
      // this.setState({ matchFound = "true" })
    // }
  }

  getRegistrationStatus = () => {
    if (localStorage.getItem('tandt-regStatus') !== "true") {
      this.setState({ isUserRegistered: false });
      this.checkRegStatus();
    } else {
      this.setState({ isUserRegistered: true });
    }
  }

  checkRegStatus = () => {
    console.log(this.state.isUserRegistered)
    let checking = setInterval(() => {
      this.getRegistrationStatus();
      console.log("checking reg status" + localStorage.getItem('tandt-regStatus'))
    }, 1000)

    if (localStorage.getItem('tandt-regStatus') === "statusnull") {
      return checking
    } else {
      clearInterval(checking);
    }
  }

  timeToRender = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  componentDidMount() {
    this.timeToRender().then(() => this.setState({ isAppLoading: false }));
    setTimeout(() => {
      this.getRegistrationStatus();
      this.getAppCode();
    }, 500)
  }

  render() { 
    if (this.state.isAppLoading) { 
      return null
    } else 
      return (
        <div className="App">
          {this.state.isUserRegistered === false &&
            <div>
              <WelcomePage />
            </div>
          }
          {this.state.matchFound === true &&
            <div>
              <ProximityNotification />
            </div>
          } 
          {this.state.isUserRegistered === true &&
            <div>
              <Dashboard />
            </div>
          }
        </div>
      );
    }
  }


export default App;