import axios from "axios";

const getUserWithPagination = async function(pageNo) {
    const res = await axios.get(`/ims-react/users_pagination/${pageNo}`);
    return res.data;
}

const createUser = async function(userId, name, email, designation, password, roles, permissions) {
    const res = await axios.post('/ims-react/create_user', {
        userId, name, email, password, roles, permissions, designation
    });
    return res.data;
}

export {getUserWithPagination, createUser};
