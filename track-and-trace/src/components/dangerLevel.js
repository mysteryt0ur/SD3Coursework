import React from 'react';

class DangerLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dangerLevel: ""
        };
    }

    getPostcodeInfo = (currentPostcode) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        var upperCasePostcode = currentPostcode.toUpperCase();
        var url = "https://postcode-data-api.web-sandpit.sandpit.rscomp.systems/?postcode=" + upperCasePostcode

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => this.setPostcode(result))
        .catch(error => console.log('error', error));
    }

    setPostcode = (postcodeResults) => {
        let convertToJSON = JSON.parse(postcodeResults);
        let getDescription = convertToJSON.Description
            if (getDescription === "Med Alert" || "High Alert" || "Very High Alert") {
            this.getDangerLevel(getDescription)
        }
    } 

    getDangerLevel = (dangerLevel) => {
        let result
        if (dangerLevel === undefined) {
            result = "Pending"
        } else {
            result = dangerLevel
        }
        this.setDangerLevel(result)
    }

    setDangerLevel = (returnedDangerLevel) => {
        this.setState({ dangerLevel: returnedDangerLevel })
    }

    componentDidMount() {
        this.getPostcodeInfo(this.props.postcode)
    }

    render() {
        return (
            <div>
              {this.state.dangerLevel === "Medium Alert" && 
                <div className="danger-level" id="low-level">
                    <span>{this.state.dangerLevel}</span>
                </div>
              }
              {this.state.dangerLevel === "High Alert" && 
                <div className="danger-level" id="med-level">
                    <span>{this.state.dangerLevel}</span>
                </div>
              }
              {this.state.dangerLevel === "Very High Alert" && 
                <div className="danger-level" id="high-level">
                    <span>{this.state.dangerLevel}</span>
                </div>
              }
              {this.state.dangerLevel === "Pending" && 
                <div className="danger-level" id="pending-alert">
                    <span>{this.state.dangerLevel}</span>
                </div>
              }
            </div>
        );
    }
}

export default DangerLevel;