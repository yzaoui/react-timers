import React from 'react';
import EditableTimer from "./EditableTimer";

const EditableTimerList: React.FC = () => (
    <div id="timers">
        <EditableTimer editTimer={false} title="First Timer" project="Project 1" elapsedms={12345678} />
        <EditableTimer editTimer={true} title="Second Timer" project="Project 2" elapsedms={3000} />
    </div>
);

export default EditableTimerList;
