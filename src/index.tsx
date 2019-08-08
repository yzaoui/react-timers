import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import { TimerForm, TimerFormAction } from "./component/TimerForm";
import Timer from "./component/Timer";

// ReactDOM.render(<Timer title="First Timer" project="Project" elapsedms={12345678}/>, document.getElementById('root'));
ReactDOM.render((
        <div>
            <Timer title="First Timer" project="Project 1" elapsedms={12345678} />
            <TimerForm title="Second Timer" project="Project 2" action={TimerFormAction.Create} />
        </div>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
