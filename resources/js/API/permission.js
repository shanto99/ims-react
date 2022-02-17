import axios from "axios"

const getPermissions = async function() {
    const res = await axios.get('/ims-react/permissions');
    return res.data;
}


export {getPermissions};
