import React from 'react';
import EditableTimer from "./EditableTimer";

interface Props {
    timers: Timer[];
}

const EditableTimerList: React.FC<Props> = ({ timers }) => (
    <div id="timers">
        {timers.map((timer) => (
            <EditableTimer key={timer.id} timer={timer} />
        ))}
    </div>
);

export default EditableTimerList;
