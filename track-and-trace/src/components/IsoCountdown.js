import React from 'react';
import ArrowIcon from '../images/arrow.png'

class IsoCountdown extends React.Component {

    render() {
        return (
            <div>
                <div className="iso-container">
                    <div className="iso-header">
                        <span>Isolation Countdown</span>
                    </div>
                    <div className="iso-info">
                        <div className="iso-data">
                            <span>Your isolation period ends in:</span>
                        </div>
                        <div className="iso-addit-info">
                            <div>
                                <p>Find out more information on isolation</p>
                            </div>
                            <div>
                                <img src={ArrowIcon} alt="arrow-icon" id="arrow-icon"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IsoCountdown;