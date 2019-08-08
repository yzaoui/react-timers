import React from "react";

export enum TimerFormAction {
    Create, Update
}

interface TimerFormProps {
    title: string;
    project: string;
    action: TimerFormAction;
}

export const TimerForm: React.FC<TimerFormProps> = ({ title, project, action }) => (
    <div className="ui centered card">
        <div className="content">
            <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input type="text" defaultValue={title} />
                </div>
                <div className="field">
                    <label>Project</label>
                    <input type="text" defaultValue={project} />
                </div>
                <div className="ui two bottom attached buttons">
                    <button className="ui basic blue button">{actionToString(action)}</button>
                    <button className="ui basic red button">Cancel</button>
                </div>
            </div>
        </div>
    </div>
);

const actionToString = (action: TimerFormAction) => {
    switch (action) {
        case TimerFormAction.Create: return "Create";
        case TimerFormAction.Update: return "Update";
    }
};
