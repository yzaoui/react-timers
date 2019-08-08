import React from "react";

export enum TimerFormAction {
    Create, Update
}

interface Props {
    timer?: Timer;
    action: TimerFormAction;
}

export const TimerForm: React.FC<Props> = ({ timer, action }) => (
    <div className="ui centered card">
        <div className="content">
            <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input type="text" defaultValue={timer ? timer.title : ""} />
                </div>
                <div className="field">
                    <label>Project</label>
                    <input type="text" defaultValue={timer? timer.project : ""} />
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
