import React from "react";

class AddUser extends React.Component {
    render() {
        return (
            <form>
                <div className="mt-3">
                    <label className="form-label">User ID</label>
                    <input type="text" required
                    name="UserID" className="form-control" placeholder="User ID"/>
                </div>
                <div class="mt-3">
                    <label className="form-label">Name</label>
                    <input id="user-name" type="text" required
                    name="UserName" className="form-control" placeholder="User name"/>
                </div>
                <div class="mt-3">
                    <label className="form-label">Designation</label>
                    <input id="user-designation" type="text" required
                    name="Designation" className="form-control" placeholder="User designation"/>
                </div>
                <div class="mt-3">
                    <label className="form-label">Email</label>
                    <input id="user-email" type="text" required
                    name="Email" className="form-control" placeholder="User email"/>
                </div>
            </form>
        )
    }
}

export default AddUser;

