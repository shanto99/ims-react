import axios from "axios"

const getPermissions = async function() {
    const res = await axios.get('/ims-react/permissions');
    return res.data;
}

const createPermission = async function(permission) {
    const res = await axios.post('/ims-react/create_permission', {
        name: permission
    });

    return res.data;
}

const deletePermission = async function(permissionId) {
    const res = await axios.delete(`/ims-react/delete_permission/${permissionId}`);
    return res.data;
}


export {getPermissions, createPermission, deletePermission};
