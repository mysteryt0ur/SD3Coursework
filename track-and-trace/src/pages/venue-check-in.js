import React from 'react';
import ArrowIcon from '../images/arrow.png'
import SuccessTick from '../images/tick.png'
import BackArrowIcon from '../images/left-arrow.png'

class VenueCheckIn extends React.Component {
    constructor() {
        super();
        this.state = {
            useCamera: "true",
            hasCheckInFinished: "false",
            currentVenueCode: "",
            venueName: "The Saxon Crown",
            venueCodeLength: 10
        };
    }

    getVenueName = (code) => {
        // let result 
        // check code against back-end to see if it matches up with T&T location //
        //     if (the code matches) {
        //         result = the venue name
        //     } else {
        //         result = false
        //     }
    }

    updateCurrentCode = (event) => {
        let currentCode = event.target.value
        this.setState({ currentVenueCode : currentCode }); 
    }

    changeCheckInStatus = (answer) => {
        this.setState({ hasCheckInFinished: answer })
    }

    changeUseCamera = (answer) => {
        this.setState({ useCamera: answer })
    }

    setVenueName = (venue) => {
        this.setState({ venueName: venue })
    }

    getInputtedCodeLength = () => {
        let iclReturn
        if (this.state.currentVenueCode.length === this.state.venueCodeLength) {
            iclReturn = true
        } else {
            iclReturn = false
        } return iclReturn
    }

    render() {
        if (this.state.hasCheckInFinished === "false") {
            return (
                <div className="addit-page">
                    <div className="page-header" id="vci-header">
                        <p>Venue Check-In</p>
                    </div>
                    <div className="content-inner-addit-page">
                        <div className="page-info-venue">
                            {this.state.useCamera === "true" &&
                            <div>
                                <p>Use your devices camera to place the QR code into the box below</p>
                            </div>
                            }
                            {this.state.useCamera === "false" &&
                            <div>
                                <p>Use the input box below to enter the code of the venue you want to check-into</p>
                            </div>
                            }
                        </div>
                        <div className="page-info-venue-two" id="vci-other-input-option">
                            {this.state.useCamera === "true" &&
                            <div>
                                <p id="vci-option-2" onClick={() => this.changeUseCamera("false")}>Click here to enter the code manually</p>
                            </div>
                            }
                            {this.state.useCamera === "false" &&
                            <div>
                                <p id="vci-option-2" onClick={() => this.changeUseCamera("true")}>Click here to enter the code via camera</p>
                            </div>
                            }
                        </div>
                        {this.state.useCamera === "true" && 
                        <div id="camera-input">
                            <div id="camera"></div>
                        </div>
                        }
                        <form id="venue-form-input">
                            {this.state.useCamera === "false" && 
                            <div>
                                <label id="input-test-code">
                                    <p>Venue Code: </p>
                                    <input type="text" value={this.state.currentVenueCode} name="name" className="text-input" onChange={this.updateCurrentCode}/>
                                </label>
                                {this.getInputtedCodeLength() === true &&
                                <div>
                                    <div id="returned-venue-name">
                                        <p>You are trying to check-in to</p>
                                        <p id="venue-name">{this.state.venueName}</p>
                                    </div>
                                    <p id="positive-message"><b>If this correct</b>, please click the continue button below.</p>
                                    <p id="negative-message"><b>If this is not the right venue</b>, please check couble check the code you have entered.</p>
                                </div>
                                }
                            </div>
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
                </div>  
            );
        } else {
            return (
                <div className="success-page-holder">
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
                    </div>
                </div>
            )
        }
    }
}




export default VenueCheckIn;
