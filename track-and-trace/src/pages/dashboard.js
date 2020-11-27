import React from 'react';
import venueIcon from '../images/check.png';
import resultIcon from '../images/statistics.png';
import testIcon from '../images/notepad.png';
import symptomIcon from '../images/thermometer.png';
import settingsIcon from '../images/settings.png'
import aboutIcon from '../images/about.png'
import IsoCountdown from '../components/IsoCountdown'
import PostcodeChecker from '../components/postcodeChecker'


class Dashboard extends React.Component {

    render() {
        return (
            <div className="content-inner">
                <div id="responsive-dashboard">
                    <PostcodeChecker />
                    <IsoCountdown />
                </div>
                <div id="button-holder">
                    <div className="row">
                        <div className="button-one" id="venue-button">
                            <img src={venueIcon} alt="venue-icon" id="venue-icon"></img><a className="main-button" href="#"><span>Venue Check-In</span></a>
                        </div>
                        <div className="button-two" id="results-button">
                            <img src={resultIcon} alt="results-icon" id="results-icon"></img><a className="main-button" href="#"><span>Input Test Result</span></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-one" id="book-test-button">
                            <img src={testIcon} alt="test-icon" id="test-icon"></img><a className="main-button" href="#"><span>Book a Test</span></a>
                        </div>
                        <div className="button-two" id="checker-button">
                            <img src={symptomIcon} alt="checker-icon" id="checker-icon"></img><a className="main-button" href="#"><span>Symptom Checker</span></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-one" id="settings-button">
                            <img src={settingsIcon} alt="settings-icon" id="settings-icon"></img><a className="main-button" href="#"><span>Settings</span></a>
                        </div>
                        <div className="button-two" id="about-button">
                            <img src={aboutIcon} alt="about-icon" id="about-icon"></img><a className="main-button" href="#"><span>About</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
