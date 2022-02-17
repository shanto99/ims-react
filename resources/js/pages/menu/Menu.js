import React from "react";

import { CheckSquare, Delete as DeleteIcon } from "react-feather";

import {getPermissions} from "../../API/permission";
import {getMenus} from "../../API/menu";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            permissions: []
        }
    }

    componentDidMount() {
        Promise.all([getMenus(), getPermissions()]).then(responses => {
            const menus = responses[0].menus || [];
            const permissions = responses[1].permissions || [];

            this.setState(preState => {
                const newState = {...preState};
                newState.menus = menus;
                newState.permissions = permissions;

                return newState;
            })
        });
    }

    render() {
        const {menus, permissions} = this.state;
        return (
            <>
                <div className="intro-y flex items-center mt-8">
                    <h2 className="text-lg font-medium mr-auto">
                        Menus
                    </h2>
                </div>

                <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="intro-y box p-5">
                            <form>
                                <div class="mt-3">
                                    <label className="form-label">Menu name</label>
                                    <input type="text" className="form-control" placeholder="Menu name"/>
                                </div>
                                <div class="mt-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" placeholder="Menu title"/>
                                </div>
                                <div class="mt-3">
                                    <label className="form-label">Icon</label>
                                    <input type="text" className="form-control" placeholder="Menu icon"/>
                                </div>
                                <div class="mt-3">
                                    <label className="form-label">Route name</label>
                                    <input type="text" className="form-control" placeholder="Route name"/>
                                </div>
                                <div className="mt-3">
                                    <label className="form-label">Permission</label>
                                    <select className="form-select sm:mr-2" aria-label="Default select example">
                                        <option value="">Select permission</option>
                                        {permissions.map(permission => (
                                            <option value="{{ $permission->id }}">{ permission.name }</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-5 role-form-button-panel">
                                    <button className="btn btn-warning">
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary ">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="intro-y box col-span-12 overflow-auto lg:overflow-visible">
                            <table className="table table-report mt-2">
                                <thead>
                                    <tr>
                                        <th className="whitespace-nowrap">Title</th>
                                        <th className="text-center whitespace-nowrap">Name</th>
                                        <th className="text-center whitespace-nowrap">Route name</th>
                                        <th className="text-center whitespace-nowrap">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {menus.map(menu => (
                                        <tr className="intro-x">
                                            <td>
                                                <div>{menu.Title}</div>
                                            </td>
                                            <td className="text-center">{menu.Name}</td>
                                            <td className="text-center">{menu.RouteName}</td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center mr-3"
                                                    href="#"><CheckSquare className="w-4 h-4 mr-1"/> Edit </a>
                                                    <a class="flex items-center text-theme-6"
                                                    href="#" >
                                                    <DeleteIcon className="w-4 h-4 mr-1"/> Delete </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Menu;
