import React from 'react';

interface Props {
    timer: Timer;
}

const Timer: React.FC<Props> = ({ timer }) => (
    <div className="ui centered card">
        <div className="content">
            <div className="header">{timer.title}</div>
            <div className="meta">{timer.project}</div>
            <div className="center aligned description">
                <h2>{millisecondsToHourMinuteSecond(timer.elapsedms)}</h2>
            </div>
            <div className="extra content">
                <span className="right floated edit icon">
                    <i className="edit icon" />
                </span>
                <span className="right floated trash icon">
                    <i className="trash icon" />
                </span>
            </div>
        </div>
        <div className="ui bottom attached blue basic button">
            Start
        </div>
    </div>
);

const millisecondsToHourMinuteSecond = (ms: number): string => {
    const hours = Math.floor(ms / 1000 / 60 / 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return [hours, minutes, seconds]
        .map((num) => num < 10 ? `0${num}` : `${num}`)
        .join(":");
};

export default Timer;
