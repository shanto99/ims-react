import axios from "axios";

const getRoles = async function() {
    const res = await axios.get("/ims-react/roles");
    return res.data;
}

const createRole = function(role={}) {
    return axios.post("/ims-react/create_role", role).then(res => res.data);
}

const deleteRole = async function(id) {
    const res = await axios.delete(`/ims-react/delete_role/${id}`);
    return res.data;
}

export {getRoles, createRole, deleteRole};
