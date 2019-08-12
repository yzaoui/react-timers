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
                elapsedms: 12345678,
                runningSince: null
            },
            {
                id: UUID(),
                title: "Second Timer",
                project: "Project 2",
                elapsedms: 3000,
                runningSince: null
            }
        ]
    };

    render() {
        return (
            <div className="ui column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={this.state.timers}
                        onTimerUpdate={this.handleTimerUpdate}
                        onTimerDelete={this.handleTimerDelete}
                        onTimerStart={this.handleTimerStart}
                        onTimerStop={this.handleTimerStop}
                    />
                    <ToggleableTimerForm onSubmitNewForm={this.handleSubmitNewForm} />
                </div>
            </div>
        );
    }

    handleTimerUpdate = (id: string, title: string, project: string) => {
        const timerToUpdate = this.getTimer(id);

        const updatedFields: Partial<Timer> = { title: title, project: project };

        this.updateTimer(id, Object.assign({}, timerToUpdate, updatedFields));
    };

    handleTimerDelete = (id: string) => {
        this.setState({ timers: this.state.timers.filter(timer => timer.id !== id) })
    };

    handleSubmitNewForm = (title: string, project: string) => {
        const newTimer: Timer = {
            id: UUID(),
            title: title,
            project: project,
            elapsedms: 0,
            runningSince: null
        };

        this.setState({ timers: this.state.timers.concat(newTimer) })
    };

    handleTimerStart = (id: string) => {
        const now = Date.now();

        const timerToStart = this.getTimer(id);

        const updatedFields: Partial<Timer> = { runningSince: now };

        this.updateTimer(id, Object.assign({}, timerToStart, updatedFields));
    };

    handleTimerStop = (id: string) => {
        const now = Date.now();

        const timerToStop = this.getTimer(id);

        if (timerToStop.runningSince === null) throw new Error();

        const timeSinceStart = now - timerToStop.runningSince;

        const updatedFields: Partial<Timer> = { elapsedms: timerToStop.elapsedms + timeSinceStart, runningSince: null };

        this.updateTimer(id, Object.assign({}, timerToStop, updatedFields));
    };

    getTimer = (id: string) => {
        const timer = this.state.timers.find((timer) => timer.id === id);
        if (timer === undefined) throw new Error();

        return timer;
    };

    updateTimer = (id: string, updatedTimer: Timer) => this.setState({ timers: this.state.timers.map((timer) => timer.id === id ? updatedTimer : timer) });
}

export default TimersDashboard;
