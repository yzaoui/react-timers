import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import TimersDashboard from "./component/TimersDashboard";

ReactDOM.render(<TimersDashboard />, document.getElementById('root'));

serviceWorker.register();
