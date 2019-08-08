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
                    <EditableTimerList timers={this.state.timers}/>
                    <ToggleableTimerForm onSubmitNewForm={this.handleSubmitNewForm} />
                </div>
            </div>
        );
    }

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
