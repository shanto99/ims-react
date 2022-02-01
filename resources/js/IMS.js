import React from 'react';
import ReactDOM from 'react-dom';

//pages
import Login from './layouts/login/Login';

function IMS() {
    return (
        <div className="container">
            <Login/>
        </div>
    );
}

export default IMS;

if (document.getElementById('app')) {
    ReactDOM.render(<IMS />, document.getElementById('app'));
}
