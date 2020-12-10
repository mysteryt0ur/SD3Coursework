import React from 'react';

class DangerLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dangerLevel: 2
        };
    }

    // getPostcodeInfo = () => {
    //     let upperCasePostcode = this.props.postcode.toUpperCase();
    //     console.log(upperCasePostcode)
    //     var myHeaders = new Headers();
    //     myHeaders.append("postcode", upperCasePostcode);
    //     myHeaders.append("Content-Type", "application/json");

    //     var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    //     };

    //     if (this.props.userReg) {


    //     fetch("https://postcode-data-api.web-sandpit.sandpit.rscomp.systems", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    //     }
    // }

    getDangerLevel = () => {
        return this.state.dangerLevel
    }

    componentDidMount() {
    //  setTimeout(() => {
    //         this.getPostcodeInfo();
    //     }, 500)
    }

    render() {
        let currentDangerLevel = this.getDangerLevel()
        if (currentDangerLevel === 1) {
            return (
                <div>
                    <div className="danger-level" id="low-level">
                        <span>Low</span>
                    </div>
                </div>
            )
        } else if (currentDangerLevel === 2) {
            return (
                <div>
                    <div className="danger-level" id="med-level">
                        <span>Medium</span>
                    </div>
                </div>
            )
        } else { 
            return (
            <div>
                <div className="danger-level" id="high-level">
                    <span>High</span>
                </div>
            </div>
            )
        }
    }
}

export default DangerLevel;