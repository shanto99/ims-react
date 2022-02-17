import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import store from './store';

//pages
import Login from './layouts/login/Login';
import Dashboard from './layouts/dashboard/Dashboard';
import Home from './pages/home/Home';
import UserManager from './pages/userManager/UserManager';
import AddUser from './pages/userManager/addUser/AddUser';
import Role from './pages/role/Role';
import Permissioin from './pages/permission/Permission';
import RolePermission from './pages/rolePermission/RolePermission';
import Menu from './pages/menu/Menu';
import SubMenu from './pages/subMenu/SubMenu';

function IMS() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Dashboard/>
                            </ProtectedRoute>
                        }
                    >
                        <Route path="user-manager" element={<UserManager/>} />
                        <Route path="add-user" element={<AddUser/>} />
                        <Route path="roles" element={<Role/>} />
                        <Route path="permissions" element={<Permissioin/>} />
                        <Route path="role-permission" element={<RolePermission/>} />
                        <Route path="/menus" element={<Menu/>} />
                        <Route path="sub-menus" element={<SubMenu/>} />
                        <Route path="/" element={<Home/>} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default IMS;

if (document.getElementById('app')) {
    ReactDOM.render(<IMS />, document.getElementById('app'));
}
