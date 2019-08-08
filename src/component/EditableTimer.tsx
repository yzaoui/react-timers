import React from "react";
import TimerForm, { TimerFormAction } from "./TimerForm";
import Timer from "./Timer";

interface Props {
    timer: Timer;
    onFormUpdate: (title: string, project: string) => void;
}

interface State {
    editing: boolean;
}

class EditableTimer extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        editing: false
    };

    render() {
        if (this.state.editing) return <TimerForm timer={this.props.timer} action={TimerFormAction.Update} onFormSubmit={this.handleFormUpdate} onFormCancel={this.handleFormCancel} />;
        else return <Timer timer={this.props.timer} onEditClick={this.handleEditClick} />;
    }

    handleFormUpdate = (title: string, project: string) => {
        this.props.onFormUpdate(title, project);
        this.setState({ editing: false });
    };

    handleFormCancel = () => this.setState({ editing: false });

    handleEditClick = () => this.setState({ editing: true });
}

export default EditableTimer;
