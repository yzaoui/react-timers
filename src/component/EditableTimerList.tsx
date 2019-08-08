import React from 'react';
import EditableTimer from "./EditableTimer";

interface Props {
    timers: Timer[];
    onTimerUpdate: (id: string, title: string, project: string) => void;
    onTimerDelete: (id: string) => void;
}

const EditableTimerList: React.FC<Props> = ({ timers, onTimerUpdate, onTimerDelete }) => (
    <div id="timers">
        {timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                timer={timer}
                onTimerUpdate={(title, project) => onTimerUpdate(timer.id, title, project)}
                onTimerDelete={() => onTimerDelete(timer.id)}
            />
        ))}
    </div>
);

export default EditableTimerList;
