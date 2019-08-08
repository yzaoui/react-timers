import React from 'react';
import EditableTimer from "./EditableTimer";

interface Props {
    timers: Timer[];
    onTimerUpdate: (id: string, title: string, project: string) => void;
}

const EditableTimerList: React.FC<Props> = ({ timers, onTimerUpdate }) => (
    <div id="timers">
        {timers.map((timer) => (
            <EditableTimer key={timer.id} timer={timer} onFormUpdate={(title, project) => onTimerUpdate(timer.id, title, project)} />
        ))}
    </div>
);

export default EditableTimerList;
