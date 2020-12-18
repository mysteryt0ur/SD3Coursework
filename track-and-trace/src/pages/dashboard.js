import React from 'react';
import venueIcon from '../images/check.png';
import resultIcon from '../images/statistics.png';
import testIcon from '../images/notepad.png';
import symptomIcon from '../images/thermometer.png';
import settingsIcon from '../images/settings.png'
import aboutIcon from '../images/about.png'
import BackArrow from '../images/left-arrow.png'
import IsoCountdown from '../components/isoCountdown'
import PostcodeChecker from '../components/postcodeChecker'
import DashboardHeader from '../components/DashboardHeader';
import InputTestPage from './input-test-page';
import VenueCheckIn from './venue-check-in';
import AboutSignOut from './about-and-sign-out';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            activePage: "dashboard",
            postcode: "empty"
        };
        this.showPage = this.showPage.bind(this);
    }

    showPage = (newPage) => {
        console.log(newPage)
        this.setState({ activePage: newPage });
    }

    componentDidMount() {
        setTimeout(() => {
            let getPostcode = localStorage.getItem('tandt-postcode')
            this.setState({ postcode: getPostcode })
            console.log(this.state.postcode)
          }, 500)
      }

    render() {
        return (
            <div>
                {this.state.activePage === "dashboard" && this.state.postcode !== "empty" &&
                <div>
                <DashboardHeader />
                    <div className="content-inner">
                        <div id="responsive-dashboard">
                            {this.props.matchStatus === true &&
                            <div>
                                <IsoCountdown matchStatus={this.props.matchStatus} matchTime={this.props.matchTime}/>
                            </div>
                            }
                            <PostcodeChecker postcode={this.state.postcode} matchStatus={this.props.matchStatus} userReg={this.props.userReg} />
                        </div>
                        <div id="button-holder">
                            <div className="row">
                                <div className="button-one" id="venue-button" onClick={() => this.showPage("venueCheckIn")}>
                                    <img src={venueIcon} alt="venue-icon" id="venue-icon"></img>
                                    <span className="main-button">Venue Check-In</span>
                                </div>
                                <div className="button-two" id="results-button" onClick={() => this.showPage("inputTestResult")}>
                                    <img src={resultIcon} alt="results-icon" id="results-icon"></img> 
                                    <span className="main-button">Input Test Result</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="button-one" id="book-test-button">
                                    <img src={testIcon} alt="test-icon" id="test-icon"></img>
                                    <span className="main-button">Book a Test</span>
                                </div>
                                <div className="button-two" id="checker-button">
                                    <img src={symptomIcon} alt="checker-icon" id="checker-icon"></img>
                                    <span className="main-button">Symptom Checker</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="button-one" id="settings-button">
                                    <img src={settingsIcon} alt="settings-icon" id="settings-icon"></img>
                                    <span className="main-button">
                                        <p>Settings</p>
                                    </span>
                                </div>
                                <div className="button-two" id="about-button" onClick={() => this.showPage("aboutPage")}>
                                    <img src={aboutIcon} alt="about-icon" id="about-icon"></img>
                                    <span className="main-button">
                                        <p>About & Uninstall</p>
                                    </span>
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
                            <img src={BackArrow} alt="go-to-homepage-button" className="header-arrow-icon"></img><span className="header-button">Home</span>
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
                        <VenueCheckIn />
                        <div className="submit-button-positioner-home">
                            <div className="submit-button-holder" id="home-button" onClick={() => this.showPage("dashboard")}>
                                <div className="arrow-icon-holder">
                                    <img src={BackArrow} alt="back-arrow-icon" className="arrow-icon-for-button"></img>
                                </div>
                                <input className="submit-button" type="submit" value="Home" />
                            </div>
                        </div>
                    </div>
                }

                {this.state.activePage === "aboutPage" && 
                    <div>
                        <AboutSignOut />
                    </div>
                }
            </div>
        )
    }
}

export default Dashboard;
