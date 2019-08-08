import React from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import UUID from "uuid/v4";

interface State {
    timers: Timer[];
}

class TimersDashboard extends React.Component<{}, State> {
    readonly state: Readonly<State> = {
        timers: [
            {
                id: UUID(),
                title: "First Timer",
                project: "Project 1",
                elapsedms: 12345678
            },
            {
                id: UUID(),
                title: "Second Timer",
                project: "Project 2",
                elapsedms: 3000
            }
        ]
    };

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList timers={this.state.timers} onTimerUpdate={this.handleTimerUpdate} onTimerDelete={this.handleTimerDelete} />
                    <ToggleableTimerForm onSubmitNewForm={this.handleSubmitNewForm} />
                </div>
            </div>
        );
    }

    handleTimerUpdate = (id: string, title: string, project: string) => {
        const timerToUpdate = this.state.timers.find((timer) => timer.id === id);
        if (timerToUpdate === undefined) throw new Error();

        const updatedTimer: Timer = Object.assign({}, timerToUpdate, { title: title, project: project });

        this.setState({ timers: this.state.timers.map((timer) => timer.id === id ? updatedTimer : timer) });
    };

    handleTimerDelete = (id: string) => {
        this.setState({ timers: this.state.timers.filter(timer => timer.id !== id) })
    };

    handleSubmitNewForm = (title: string, project: string) => {
        const newTimer: Timer = {
            id: UUID(),
            title: title,
            project: project,
            elapsedms: 0
        };

        this.setState({ timers: this.state.timers.concat(newTimer) })
    };
}

export default TimersDashboard;
