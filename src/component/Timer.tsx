import React from 'react';

interface Props {
    timer: Timer;
    onEditClick: () => void;
}

const Timer: React.FC<Props> = ({ timer, onEditClick }) => (
    <div className="ui centered card">
        <div className="content">
            <div className="header">{timer.title}</div>
            <div className="meta">{timer.project}</div>
            <div className="center aligned description">
                <h2>{millisecondsToHourMinuteSecond(timer.elapsedms)}</h2>
            </div>
            <div className="extra content ui icon buttons right floated">
                <button className="right floated icon compact ui basic button grey" onClick={onEditClick}>
                    <i className="edit icon" />
                </button>
                <button className="right floated icon compact ui basic button red">
                    <i className="trash icon" />
                </button>
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
