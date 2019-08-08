import React from 'react';

interface TimerProps {
    title: string;
    project: string;
    elapsedms: number;
}

const Timer: React.FC<TimerProps> = ({ title, project, elapsedms }) => {
    return (
        <div className="ui centered card">
            <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{project}</div>
                <div className="center aligned description">
                    <h2>{elapsedms}</h2>
                </div>
                <div className="extra content">
                    <span className="right floated edit icon">
                        <i className="edit icon"/>
                    </span>
                    <span className="right floated trash icon">
                        <i className="trash icon"/>
                    </span>
                </div>
            </div>
            <div className="ui bottom attached blue basic button">
                Start
            </div>
        </div>
    )
};

export default Timer;
