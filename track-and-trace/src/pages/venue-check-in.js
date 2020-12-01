import React from 'react';
import ArrowIcon from '../images/arrow.png'

class VenueCheckIn extends React.Component {

    render() {
        return (
            <div className="addit-page">
                <div className="page-header" id="vci-header">
                    <p>Venue Check-In</p>
                </div>
                <div className="content-inner-addit-page">
                    <div className="page-info-venue">
                        <p>Use your devices camera to place the QR code into the box below</p>
                    </div>
                    <div id="camera-input">
                        <div id="camera"></div>
                    </div>
                    <div className="page-info-venue-two">
                        <p id="vci-option-2">Enter the code manually</p>
                    </div>
                    <form id="input-test-form">
                        <label id="input-test-code">
                            <i>Your test code:</i>
                            <input type="text" name="name" className="text-input"/>
                        </label>
                        <div className="submit-button-positioner">
                            <div className="submit-button-holder">
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
    }
}

export default VenueCheckIn;
