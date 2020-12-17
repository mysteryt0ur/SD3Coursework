import React from "react";
import ArrowIcon from "../images/arrow.png";
import SuccessTick from "../images/tick.png";

class AboutSignOut extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteLocalStorageData = () => {
    console.log("deleting");
    return localStorage.removeItem("tandt-regStatus");
  };

  render() {
    return (
      <div className="addit-page">
        <div className="page-header" id="itr-header">
          <p>About & Uninstall</p>
        </div>
        <div className="content-inner-addit-page">
          <div className="page-info">
            <p onClick={() => this.deleteLocalStorageData()}>Delete Data</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSignOut;
