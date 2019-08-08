import React from "react";
import TimerForm, { TimerFormAction } from "./TimerForm";

interface Props {
    onSubmitNewForm: (title: string, project: string) => void;
}

interface State {
    expanded: boolean;
}

class ToggleableTimerForm extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        expanded: false
    };

    render() {
        if (this.state.expanded) return <TimerForm action={TimerFormAction.Create} onFormSubmit={this.handleFormSubmit} onFormCancel={this.handleFormCancel} />;
        else return (
            <div className="ui basic content center aligned segment">
                <button className="ui basic button icon" onClick={this.onFormOpen}>
                    <i className="plus icon" />
                </button>
            </div>
        );
    }

    onFormOpen = () => this.setState({ expanded: true });

    handleFormSubmit = (title: string, project: string) => {
        this.props.onSubmitNewForm(title, project);
        this.setState({ expanded: false });
    };

    handleFormCancel = () => this.setState({ expanded: false });
}

export default ToggleableTimerForm;
