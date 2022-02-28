import axios from "axios";

const getSubMenus = async function() {
    const res = await axios.get('/ims-react/sub_menus');
    return res.data;
}

const createSubMenu = async function(title, name, menu, permission) {
    const res = await axios.post('/ims-react/create_sub_menu', {title, name, menu, permission});
    return res.data;
}

export {getSubMenus, createSubMenu};
