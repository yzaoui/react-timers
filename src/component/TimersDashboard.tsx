import React from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerFormProps from "./ToggleableTimerForm";

const TimersDashboard: React.FC = () => (
    <div className="ui three column centered grid">
        <div className="column">
            <EditableTimerList />
            <ToggleableTimerFormProps expanded={false} />
        </div>
    </div>
);

export default TimersDashboard;
