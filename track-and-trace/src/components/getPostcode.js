import React from 'react';

class GetPostcode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPostcode: 'NN17'
        };
    }

    getUserPostcode = () => {
        return this.state.userPostcode
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