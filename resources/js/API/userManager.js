import axios from "axios";

const getUserWithPagination = function(pageNo) {
    return axios.get(`/ims-react/users_pagination/${pageNo}`).then(res => res.data);
}

export {getUserWithPagination};
