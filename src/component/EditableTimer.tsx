import React from "react";
import { TimerForm, TimerFormAction } from "./TimerForm";
import Timer from "./Timer";

interface Props {
    timer: Timer;
}

interface State {
    editTimer: boolean;
}

class EditableTimer extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        editTimer: false
    };

    render() {
        if (this.state.editTimer) return <TimerForm timer={this.props.timer} action={TimerFormAction.Update} />;
        else return <Timer timer={this.props.timer} />;
    }
}

export default EditableTimer;
