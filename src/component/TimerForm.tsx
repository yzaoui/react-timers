import React, { ChangeEventHandler } from "react";

export enum TimerFormAction {
    Create, Update
}

interface Props {
    timer?: Timer;
    action: TimerFormAction;
    onFormSubmit: (title: string, project: string) => void;
    onFormCancel: () => void;
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
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <div className="field">
                        <label>Project</label>
                        <input type="text" value={this.state.project} onChange={this.handleProjectChange} />
                    </div>
                    <div className="ui two bottom attached buttons">
                        <button className="ui basic blue button" onClick={this.handleSubmitClick}>{actionToString(this.props.action)}</button>
                        <button className="ui basic red button" onClick={this.handleCancelClick}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    }

    handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => this.setState({ title: e.target.value || "" });

    handleProjectChange: ChangeEventHandler<HTMLInputElement> = (e) => this.setState({ project: e.target.value || "" });

    handleSubmitClick = () => this.props.onFormSubmit(this.state.title, this.state.project);

    handleCancelClick = () => this.props.onFormCancel();
}

const actionToString = (action: TimerFormAction) => {
    switch (action) {
        case TimerFormAction.Create: return "Create";
        case TimerFormAction.Update: return "Update";
    }
};

export default TimerForm;
