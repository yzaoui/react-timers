import React from "react";
import { TimerForm, TimerFormAction } from "./TimerForm";

interface Props {
    expanded: boolean;
}

const ToggleableTimerForm: React.FC<Props> = ({ expanded }) => {
    if (expanded) return <TimerForm action={TimerFormAction.Create} />;
    else return (
        <div className="ui basic content center aligned segment">
            <button className="ui basic button icon">
                <i className="plus icon" />
            </button>
        </div>
    );
};

export default ToggleableTimerForm;
