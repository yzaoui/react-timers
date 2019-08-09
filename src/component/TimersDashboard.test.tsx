import React from 'react';
import ReactDOM from 'react-dom';
import TimersDashboard from "./TimersDashboard";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimersDashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
