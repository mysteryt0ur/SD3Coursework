import React from 'react';

class CountdownInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daysLeft: undefined,
            hoursLeft: undefined,
            isoFinishDay: undefined,
            isoFinishHour: undefined,
            isoPeriod: 10,
        };
    }

    getTimeLeft = () => {
        let timeOfMatch = this.props.matchTime
        let isoTime = this.getIsoTime();

        this.setState({ isoFinishDay: isoTime.getDate()})
        this.setState({ isoFinishHour: isoTime.getHours()})
        this.setState({ daysLeft: isoTime.getDate() - timeOfMatch.getDate()})
        this.setState({ hoursLeft: isoTime.getHours() - timeOfMatch.getHours()})
        console.log(this.state.isoFinishDay)
        console.log(this.state.isoFinishHour)
        console.log(this.state.daysLeft)
        console.log(this.state.hoursLeft)
    }

    getIsoTime = () => {
        let newDate = new Date(this.props.matchTime);
        newDate.setDate(newDate.getDate() + this.state.isoPeriod)
        console.log(newDate);
        return newDate;
    }

    getDayInfo = () => {
        return this.state.daysLeft
    }

    getHourInfo = () => {
        return this.state.hoursLeft
    }

    componentDidMount() {
        this.getTimeLeft();
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
                            {currentDaysLeft}
                        </span>
                    &nbsp;Days : &nbsp;
                        <span className="countdown-num">
                            {currentHoursLeft}
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