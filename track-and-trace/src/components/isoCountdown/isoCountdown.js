<<<<<<< HEAD:track-and-trace/src/components/isoCountdown/isoCountdown.js
import React, { Component } from 'react';
=======
import React from 'react';
import ArrowIcon from '../images/arrow.png'
import CountdownInfo from '../components/CountdownInfo'
>>>>>>> master:track-and-trace/src/components/IsoCountdown.js

class IsoCountdown extends Component {

    render() {
        return (
            <div>
                <div className="dashboard-container">
                    <div className="dashboard-header">
                        <span>Isolation Countdown</span>
                    </div>
                    <div className="iso-info">
                        <div className="iso-data">
                            <span>Your isolation period ends in:</span>
                            <CountdownInfo />
                        </div>
                        <div className="addit-info">
                            <div>
                                <p className="addit-info-p">Find out more information on isolation</p>
                            </div>
                            <div className="arrow-icon-holder">
                                <img src={ArrowIcon} alt="arrow-icon" className="arrow-icon"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IsoCountdown;