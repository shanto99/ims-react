import React from "react";

class UserManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            totalPage: 1,
            currentPage: 1
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div className="intro-y flex items-center mt-8">
                    <h2 className="text-lg font-medium mr-auto">
                        All users
                    </h2>
                </div>
                <a href="#" className="btn btn-primary mt-5">Add user</a>
                <div className="pos intro-y grid-cols-12 gap-5 mt-5">
                    <div className="col-span-12 md:col-span-12 lg:col-span-8">
                        <div className="intro-y box col-span-12 overflow-auto lg:overflow-visible">
                            <table className="table table-report mt-2">
                                <thead>
                                    <tr>
                                        <th className="whitespace-nowrap">Name</th>
                                        <th className="text-center whitespace-nowrap">Designation</th>
                                        <th className="text-center whitespace-nowrap">Email</th>
                                        <th className="text-center whitespace-nowrap">ACTIONS</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </>

        )
    }

}

export default UserManager;
