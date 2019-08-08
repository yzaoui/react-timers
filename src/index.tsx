import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import EditableTimer from "./component/EditableTimer";

// ReactDOM.render(<Timer title="First Timer" project="Project" elapsedms={12345678}/>, document.getElementById('root'));
ReactDOM.render((
        <div>
            <EditableTimer editTimer={false} title="First Timer" project="Project 1" elapsedms={12345678} />
            <EditableTimer editTimer={true} title="Second Timer" project="Project 2" elapsedms={3000} />
        </div>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
