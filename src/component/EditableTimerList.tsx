import React from 'react';
import EditableTimer from "./EditableTimer";

interface Props {
    timers: Timer[];
}

const EditableTimerList: React.FC<Props> = ({ timers }) => (
    <div id="timers">
        {timers.map((timer) => (
            <EditableTimer key={timer.id} editTimer={false} title={timer.title} project={timer.project} elapsedms={timer.elapsedms}/>
        ))}
    </div>
);

export default EditableTimerList;
