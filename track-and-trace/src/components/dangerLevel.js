import React from 'react';

class DangerLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dangerLevel: 2
        };
    }

    getDangerLevel = () => {
        return this.state.dangerLevel
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