import React from "react";
import { TimerForm, TimerFormAction } from "./TimerForm";
import Timer from "./Timer";

interface EditableTimerProps {
    editTimer: boolean;
    title: string;
    project: string;
    elapsedms: number;
}

const EditableTimer: React.FC<EditableTimerProps> = ({ editTimer, title, project, elapsedms }) => {
    if (editTimer) return <TimerForm title={title} project={project} action={TimerFormAction.Update} />;
    else return <Timer title={title} project={project} elapsedms={elapsedms} />;
};

export default EditableTimer;
