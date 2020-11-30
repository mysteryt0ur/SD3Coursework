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
                    <div className="page-info">
                        <p>If you have recieved a code via the NHS text services linking to your recent coronavirus test, please enter this in the box below</p>
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
