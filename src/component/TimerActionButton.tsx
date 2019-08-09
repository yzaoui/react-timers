import React from "react";

interface Props {
    timerIsRunning: boolean;
    onStartClick: () => void;
    onStopClick: () => void;
}

const TimerActionButton: React.FC<Props> = ({ timerIsRunning, onStartClick, onStopClick }) => {
    if (timerIsRunning) return <div className="ui bottom attached red basic button" onClick={onStopClick}>Stop</div>;
    else return <div className="ui bottom attached green basic button" onClick={onStartClick}>Start</div>;
};

export default TimerActionButton;
