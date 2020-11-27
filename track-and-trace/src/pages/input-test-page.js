import React from 'react';

class InputTestPage extends React.Component {

    render() {
        return (
            <div>
                <div className="page-header" id="itr-header">
                    <p>Input Test Result</p>
                </div>
                <div className="content-inner">
                    <div className="page-info">
                        <p>If you have recieved a code via the NHS text services linking to your recent coronavirus test, please enter this in the box below</p>
                    </div>
                    <form id="input-test-form">
                        <label>
                            Your test code:
                            <input type="text" name="name" className="text-input"/>
                        </label>
                        <div className="submit-button-holder">
                            <input type="submit" value="Continue" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default InputTestPage;
