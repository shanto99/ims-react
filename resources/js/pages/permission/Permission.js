import React from "react";
import {CheckSquare, Delete as DeleteIcon} from "react-feather";
import { getPermissions } from "../../API/permission";
import "./style.css";

class Permissioin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            permissions: []
        }
    }

    componentDidMount()
    {
        getPermissions().then(res => {
            this.setState(preState => {
                const newState = {...preState};
                newState.permissions = res.permissions || [];
                return newState;
            });
        })
    }

    render()
    {
        const {permissions} = this.state;

        return (
            <>
                <div className="intro-y flex items-center mt-8">
                    <h2 className="text-lg font-medium mr-auto">
                        Permissions
                    </h2>
                </div>
                <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                    <div className="col-span-6 lg:col-span-4">
                        <div className="intro-y box p-5">
                            <table className="table table-report mt-2">
                                <thead>
                                    <tr>
                                        <th className="whitespace-nowrap">Permission</th>
                                        <th className="text-center whitespace-nowrap">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {permissions.map(permission => {
                                        return (
                                            <tr className="intro-x">
                                                <td>
                                                    <div className="font-medium whitespace-nowrap">
                                                        {permission.name}
                                                    </div>
                                                </td>
                                                <td class="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <a className="flex items-center mr-3"
                                                        href="#"><CheckSquare className="w-4 h-4 mr-1"/> Edit </a>
                                                        <a className="flex items-center text-theme-6"
                                                        href="#">
                                                        <DeleteIcon className="w-4 h-4 mr-1"/> Delete </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-span-6 lg:col-span-4">
                        <div className="intro-y box p-5">
                            <form method="POST">
                                <div>
                                    <label class="form-label">Permission name</label>
                                    <input type="text" className="form-control" placeholder="Permission name"/>
                                </div>
                                <div className="flex space-x-4 permission-form-button-panel">
                                    <button className="btn btn-warning mt-5 invisible">
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary mt-5">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Permissioin;
