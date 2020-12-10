import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard'
import WelcomePage from './pages/welcome'
import ProximityNotification from './components/ProximityNotification'
//import sha256 from 'crypto-js/sha256';
//import hmacSHA512 from 'crypto-js/hmac-sha512';
//import Base64 from 'crypto-js/enc-base64';
var CryptoJS = require("crypto-js");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isUserRegistered: false,
      matchFound: "",
      postcode: "",
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
    let appCode = localStorage.getItem('tandt-appName')
    if ("tandt-appName" in localStorage) {
      console.log("an app code exists so starting get flagged accounts")
    } else {
      let newCode = this.getRandomCode()
      console.log("no app code exists")
      localStorage.setItem('tandt-appName', newCode)
    }
    this.checkingForAppCode(appCode)
  }

  // check every 10 seconds to see if any new cases have arisen
  checkingForAppCode = (appCode) => {
    let checkingForCases = setInterval(() => {
      this.getFlaggedAccounts(appCode);
      console.log("checking reg status" + localStorage.getItem('tandt-appName'))
    }, 10000)

    if (this.state.matchFound !== "") {
      this.logCase()
      clearInterval(checkingForCases)
    } else 
      return checkingForCases()
  }

  getFlaggedAccounts = (appCode) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    var raw = "{\"1\": \"" + appCode + "\"}";
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    console.log("get flagged accounts is being ran")

    fetch("https://tandt-flagged-accounts-api.web-sandpit.sandpit.rscomp.systems/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result, "this is the result for the get flagged accounts section"))
    .catch(error => console.log('error', error));
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
      this.getAppCode();
    }, 500)
    setInterval(() => {
      this.getRegistrationStatus();
    }, 2000)
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
              <Dashboard userReg={this.state.isUserRegistered}/>
            </div>
          }
        </div>
      );
    }
  }


export default App;