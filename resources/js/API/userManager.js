import axios from "axios";

const getUserWithPagination = function() {
    return axios.get('/ims-react/users_pagination').then(function(res) {

    })
}

export {getUserWithPagination};
