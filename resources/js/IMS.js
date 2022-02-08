import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

//pages
import Login from './layouts/login/Login';
import Dashboard from './layouts/dashboard/Dashboard';

import store from './store';



function IMS() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route
                        path="/*"
                        element={
                            <ProtectedRoute>
                                <Dashboard/>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </Provider>
    );
}

export default IMS;

if (document.getElementById('app')) {
    ReactDOM.render(<IMS />, document.getElementById('app'));
}
