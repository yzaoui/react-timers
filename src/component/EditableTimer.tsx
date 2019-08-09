import React from "react";
import TimerForm, { TimerFormAction } from "./TimerForm";
import TimerComponent from "./TimerComponent";

interface Props {
    timer: Timer;
    onTimerUpdate: (title: string, project: string) => void;
    onTimerDelete: () => void;
    onTimerStart: () => void;
    onTimerStop: () => void;
}

interface State {
    editing: boolean;
}

class EditableTimer extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        editing: false
    };

    render() {
        if (this.state.editing) return <TimerForm
            timer={this.props.timer}
            action={TimerFormAction.Update}
            onFormSubmit={this.handleFormUpdate}
            onFormCancel={this.handleFormCancel}
        />;
        else return <TimerComponent
            timer={this.props.timer}
            onEditClick={this.handleEditClick}
            onDeleteClick={this.props.onTimerDelete}
            onStartClick={this.props.onTimerStart}
            onStopClick={this.props.onTimerStop}
        />;
    }

    handleFormUpdate = (title: string, project: string) => {
        this.props.onTimerUpdate(title, project);
        this.setState({ editing: false });
    };

    handleFormCancel = () => this.setState({ editing: false });

    handleEditClick = () => this.setState({ editing: true });
}

export default EditableTimer;
