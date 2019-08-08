import React from "react";
import { TimerForm, TimerFormAction } from "./TimerForm";

interface State {
    expanded: boolean;
}

class ToggleableTimerForm extends React.Component<{}, State> {
    readonly state: Readonly<State> = {
        expanded: false
    };

    render() {
        if (this.state.expanded) return <TimerForm action={TimerFormAction.Create} />;
        else return (
            <div className="ui basic content center aligned segment">
                <button className="ui basic button icon" onClick={this.onFormOpen}>
                    <i className="plus icon" />
                </button>
            </div>
        );
    }

    onFormOpen = () => {
        this.setState({ expanded: true })
    }
}

export default ToggleableTimerForm;
