import React, { Component } from 'react';
import TestForm from '../../components/testForm/testForm'
import './styles.css';


class WelcomePage extends Component {

    render() {
        return (
            <div className="content-inner">
                <div className="inner-header">
                    <h1 className="header-text" id="wel-page-header">Welcome</h1>
                </div>

            <TestForm />

            </div>
        );
    }
}

export default WelcomePage;
