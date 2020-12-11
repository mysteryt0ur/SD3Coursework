import React from 'react';

class CountdownInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daysLeft: 7,
            hoursLeft: 1
        };
    }

    getTimeLeft = () => {
        let timeOfMatch = this.props.matchTime
        console.log(timeOfMatch)
    }

    getDayInfo = () => {
        return this.state.daysLeft
    }

    getHourInfo = () => {
        return this.state.daysLeft
    }

    render() {
        let currentDaysLeft = this.getDayInfo()
        let currentHoursLeft = this.getHourInfo()

        if (currentDaysLeft >= 1 ) {
            return (
            <div>
                <div className="countdown-info">
                    <p>
                        <span className="countdown-num">
                            0{currentDaysLeft}
                        </span>
                    &nbsp;Days : &nbsp;
                        <span className="countdown-num">
                            0{currentHoursLeft}
                        </span>
                    &nbsp;Hours
                    </p>
                </div>
            </div>
            )
        } else {
            return (
            <div>
                <div className="countdown-info">
                    <p>
                        <span className="countdown-num">
                            0{currentHoursLeft}
                        </span>
                    &nbsp;Hours
                    </p>
                </div>
            </div>
            )
        }
    }
}

export default CountdownInfo;