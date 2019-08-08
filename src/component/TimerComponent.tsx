import React from 'react';

interface Props {
    timer: Timer;
    onEditClick: () => void;
    onDeleteClick: () => void;
}

class TimerComponent extends React.Component<Props> {
    render() {
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.timer.title}</div>
                    <div className="meta">{this.props.timer.project}</div>
                    <div className="center aligned description">
                        <h2>{millisecondsToHourMinuteSecond(this.props.timer.elapsedms)}</h2>
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
                <div className="ui bottom attached blue basic button">
                    Start
                </div>
            </div>
        );
    }
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
