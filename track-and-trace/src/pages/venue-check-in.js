import React from 'react';
import ArrowIcon from '../images/arrow.png'
import SuccessTick from '../images/tick.png'
import BackArrowIcon from '../images/left-arrow.png'

class VenueCheckIn extends React.Component {
    constructor() {
        super();
        this.state = {
            showCodeInput: "false",
            hasCheckInFinished: "false",
            venueName: "The Saxon Crown"
        };
    }

    changeShowCodeInput = (answer) => {
        this.setState({ showCodeInput: answer })
    }

    changeCheckInStatus = (answer) => {
        this.setState({ hasCheckInFinished: answer })
    }

    getVenueName = (venue) => {
        this.setState({ venueName: venue })
    }

    render() {
        return (
            <div className="addit-page">
                <div className="page-header" id="vci-header">
                    <p>Venue Check-In</p>
                </div>
                {this.state.hasCheckInFinished === "false" &&
                <div className="content-inner-addit-page">
                    <div className="page-info-venue">
                        <p>Use your devices camera to place the QR code into the box below</p>
                    </div>
                    <div id="camera-input">
                        <div id="camera"></div>
                    </div>
                    <div className="page-info-venue-two" id="etcm-holder">
                        <p id="vci-option-2" onClick={() => this.changeShowCodeInput("true")}>Enter the code manually</p>
                    </div>
                    <form id="venue-form-input">
                        {this.state.showCodeInput === "true" && 
                        <label id="input-test-code">
                            <p>Venue Code: </p>
                            <input type="text" name="name" className="text-input"/>
                        </label>
                        }
                        <div className="submit-button-positioner">
                            <div className="submit-button-holder" onClick={() => this.changeCheckInStatus("true")}>
                                <div className="arrow-icon-holder">
                                    <img src={ArrowIcon} alt="arrow-icon" className="arrow-icon-for-button"></img>
                                </div>
                                <input className="submit-button" type="submit" value="Continue" />
                            </div>
                        </div>
                    </form>
                </div>             
                }
                {this.state.hasCheckInFinished === "true" &&
                <div id="success-page">
                    <div className="page-header" id="cis-header">
                        <p>Success</p>
                        <img src={SuccessTick} alt="success-tick" className="success-tick-icon"></img>
                    </div>
                    <div className="content-inner-addit-page" id="success-page-info">
                        <div id="venue-info">
                            <p>You have been checked into</p>
                            <p id="venue-name">{this.state.venueName}</p>
                            <p>Enjoy responsibly and in-line with current regulations</p>
                            <p id="vci-learn-more">Learn more about current rules</p>
                        </div>
                    </div>
                    <div className="submit-button-positioner">
                        <div className="submit-button-holder" id="home-button" onClick={() => this.changeCheckInStatus("true")}>
                            <div className="arrow-icon-holder">
                                <img src={BackArrowIcon} alt="back-arrow-icon" className="arrow-icon-for-button"></img>
                            </div>
                            <input className="submit-button" type="submit" value="Home" />
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default VenueCheckIn;
