import React, { ChangeEventHandler } from "react";

export enum TimerFormAction {
    Create, Update
}

interface Props {
    timer?: Timer;
    action: TimerFormAction;
}

interface State {
    title: string;
    project: string;
}

class TimerForm extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        title: this.props.timer ? this.props.timer.title : "",
        project: this.props.timer ? this.props.timer.project : ""
    };

    render() {
        return <div className="ui centered card">
            <div className="content">
                <div className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={this.onTitleChange} />
                    </div>
                    <div className="field">
                        <label>Project</label>
                        <input type="text" value={this.state.project} onChange={this.onProjectChange} />
                    </div>
                    <div className="ui two bottom attached buttons">
                        <button className="ui basic blue button">{actionToString(this.props.action)}</button>
                        <button className="ui basic red button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    }

    onTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ title: e.target.value || "" })
    };

    onProjectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ project: e.target.value || "" })
    };
}

const actionToString = (action: TimerFormAction) => {
    switch (action) {
        case TimerFormAction.Create: return "Create";
        case TimerFormAction.Update: return "Update";
    }
};

export default TimerForm;
