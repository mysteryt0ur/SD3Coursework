import React from 'react';
import venueIcon from '../images/check.png';
import resultIcon from '../images/statistics.png';
import testIcon from '../images/notepad.png';
import symptomIcon from '../images/thermometer.png';
import settingsIcon from '../images/settings.png'
import aboutIcon from '../images/about.png'
import BackArrow from '../images/left-arrow.png'
import IsoCountdown from '../components/IsoCountdown'
import PostcodeChecker from '../components/postcodeChecker'
import DashboardHeader from '../components/DashboardHeader';
import InputTestPage from './input-test-page';
import VenueCheckIn from './venue-check-in';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            activePage: "dashboard"
        };
        this.showPage = this.showPage.bind(this);
    }

    showPage = (newPage) => {
        console.log(newPage)
        this.setState({ activePage: newPage });
    }

    render() {
        return (
            <div>
                {this.state.activePage === "dashboard" && 
                <div>
                <DashboardHeader />
                    <div className="content-inner">
                        <div id="responsive-dashboard">
                            <IsoCountdown />
                            <PostcodeChecker />
                        </div>
                        <div id="button-holder">
                            <div className="row">
                                <div className="button-one" id="venue-button" onClick={() => this.showPage("venueCheckIn")}>
                                    <img src={venueIcon} alt="venue-icon" id="venue-icon"></img><a className="main-button" href="#"><span>Venue Check-In</span></a>
                                </div>
                                <div className="button-two" id="results-button" onClick={() => this.showPage("inputTestResult")}>
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
                </div>
                }

                {this.state.activePage !== "dashboard" &&
                    <div>
                        <header className="App-header">
                            <div className="button" id="home-button" onClick={() => this.showPage("dashboard")}>
                            <img src={BackArrow} alt="go-to-homepage-button" className="header-arrow-icon"></img><a className="header-button" href="#"><span>Home</span></a>
                            </div>
                            <span>Track & Trace App</span>
                            <div id="header-straightener">
                            </div>
                        </header>
                    </div>
                }

                {this.state.activePage === "inputTestResult" && 
                    <div>
                        <InputTestPage />
                    </div>
                }

                {this.state.activePage === "venueCheckIn" && 
                    <div>
                        <VenueCheckIn/>
                    </div>
                }
            </div>
        )
    }
}

export default Dashboard;
