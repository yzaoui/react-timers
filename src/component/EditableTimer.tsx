import React from "react";
import { TimerForm, TimerFormAction } from "./TimerForm";
import Timer from "./Timer";

interface Props {
    timer: Timer;
}

interface State {
    editing: boolean;
}

class EditableTimer extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        editing: false
    };

    render() {
        if (this.state.editing) return <TimerForm timer={this.props.timer} action={TimerFormAction.Update} />;
        else return <Timer timer={this.props.timer} />;
    }
}

export default EditableTimer;
