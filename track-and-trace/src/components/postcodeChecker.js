import React from 'react';
import ArrowIcon from '../images/arrow.png'
import PinIcon from '../images/pin.png'
import DangerLevel from '../components/dangerLevel'
import GetPostcode from '../components/getPostcode'

class PostcodeChecker extends React.Component {

    render() {
        return (
            <div>
                <div className="dashboard-container">
                    <div className="dashboard-header">
                        <span>My Area Statistics</span>
                    </div>
                    <div className="postcode-info">
                        <div className="postcode-icon">
                            <img src={PinIcon} alt="pin-icon" id="pin-icon"></img>
                        </div>
                        <div className="postcode-details">
                            <p>The risk level in</p>
                            <p id="postcode"><GetPostcode /></p>
                            <p>is</p>
                            <div>
                                <DangerLevel />
                            </div>
                        </div>
                        <div className="addit-info">
                            <div>
                                <p className="addit-info-p">Find out more information on my postcode area</p>
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

export default PostcodeChecker;