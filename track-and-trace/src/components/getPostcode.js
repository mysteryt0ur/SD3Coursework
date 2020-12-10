import React from 'react';

class GetPostcode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPostcode: this.props.postcode
        };
    }

    getUserPostcode = () => {
        return this.state.userPostcode.toUpperCase()
    }

    render() {
        let userPostcode = this.getUserPostcode()
        return (
            <div>
                <p id="postcode">
                    {userPostcode}
                </p>
            </div>
        )
    }
}

export default GetPostcode;