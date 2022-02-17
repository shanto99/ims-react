import axios from "axios";

const getRolesWithPermissions = async function() {
    const res = await axios.get('/ims-react/roles_permissions');
    return res.data;
}

export {getRolesWithPermissions};
