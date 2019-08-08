import React from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerFormProps from "./ToggleableTimerForm";

interface State {
    timers: Timer[];
}

class TimersDashboard extends React.Component<{}, State> {
    readonly state: Readonly<State> = {
        timers: [
            {
                id: 0,
                title: "First Timer",
                project: "Project 1",
                elapsedms: 12345678
            },
            {
                id: 1,
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
                    <ToggleableTimerFormProps expanded={false} />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;
