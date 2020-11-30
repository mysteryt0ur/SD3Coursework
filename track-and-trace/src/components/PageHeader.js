import React from 'react';

class PageHeader extends React.Component {

    render() {
        return (
            <div className="addit-page">
                <header className="App-header">
                    <div className="button" id="home-button">
                    <img src={BackArrow} alt="go-to-homepage-button" className="header-arrow-icon"></img><a className="header-button" href="#"><span>Home</span></a>
                    </div>
                    <span>Track & Trace App</span>
                    <div id="header-straightener">
                    </div>
                </header>
            </div>
        );
    }
}

export default PageHeader;
