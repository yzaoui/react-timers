import React from "react";
import { TimerForm, TimerFormAction } from "./TimerForm";

interface ToggleableTimerFormProps {
    expanded: boolean;
}

const ToggleableTimerFormProps: React.FC<ToggleableTimerFormProps> = ({ expanded }) => {
    if (expanded) return <TimerForm title={"New Title"} project={"New Project"} action={TimerFormAction.Create} />;
    else return (
        <div className="ui basic content center aligned segment">
            <button className="ui basic button icon">
                <i className="plus icon" />
            </button>
        </div>
    );
};

export default ToggleableTimerFormProps;
