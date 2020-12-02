import React, { Component } from 'react';
import TestForm from '../components/testForm/testForm'
import DashboardHeader from '../components/DashboardHeader';

class WelcomePage extends Component {

    render() {
        return (
            <div>
                <DashboardHeader/>
                <div className="addit-page">
                    <div className="page-header" id="welcome-header">
                        <p>Welcome</p>
                    </div>
                <TestForm />
                </div>
            </div>
        );
    }
}

export default WelcomePage;
