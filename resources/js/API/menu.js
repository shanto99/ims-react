import axios from "axios"

const createMenu = async function(menuObj) {
    Object.keys(menuObj).forEach(key => {
        if(menuObj[key] == '') delete menuObj[key];
    });
    const res = await axios.post('/ims-react/create_menu', menuObj);
    return res.data;
}

const getMenus = async function() {
    const res = await axios.get('/ims-react/menus');
    return res.data;
}

const deleteMenu = async function(id) {
    const res = await axios.delete(`/ims-react/delete_menu/${id}`);
    return res.data;
}

export {getMenus, createMenu, deleteMenu};
