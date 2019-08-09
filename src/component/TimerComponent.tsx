import React from 'react';
import TimerActionButton from "./TimerActionButton";

interface Props {
    timer: Timer;
    onEditClick: () => void;
    onDeleteClick: () => void;
    onStartClick: () => void;
    onStopClick: () => void;
}

class TimerComponent extends React.Component<Props> {
    forceUpdateInterval: (number | null) = null;

    componentDidMount() {
        this.forceUpdateInterval = window.setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        if (this.forceUpdateInterval !== null) {
            clearInterval(this.forceUpdateInterval);
            this.forceUpdateInterval = null;
        }
    }

    render() {
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.timer.title}</div>
                    <div className="meta">{this.props.timer.project}</div>
                    <div className="center aligned description">
                        <h2>{this.timeString}</h2>
                    </div>
                    <div className="extra content ui icon buttons right floated">
                        <button className="right floated icon compact ui basic button grey" onClick={this.props.onEditClick}>
                            <i className="edit icon" />
                        </button>
                        <button className="right floated icon compact ui basic button red" onClick={this.props.onDeleteClick}>
                            <i className="trash icon" />
                        </button>
                    </div>
                </div>
                <TimerActionButton timerIsRunning={this.props.timer.runningSince !== null} onStartClick={this.handleStartClick} onStopClick={this.handleStopClick} />
            </div>
        );
    }

    get timeString() {
        const { elapsedms, runningSince } = this.props.timer;

        let totalElapsedMS = elapsedms;

        if (runningSince !== null) {
            totalElapsedMS += Date.now() - runningSince;
        }

        return millisecondsToHourMinuteSecond(totalElapsedMS);
    }

    handleStartClick = () => this.props.onStartClick();

    handleStopClick = () => this.props.onStopClick();
}

const millisecondsToHourMinuteSecond = (ms: number): string => {
    const hours = Math.floor(ms / 1000 / 60 / 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return [hours, minutes, seconds]
        .map((num) => num < 10 ? `0${num}` : `${num}`)
        .join(":");
};

export default TimerComponent;
