import axios from "axios";

const getSubMenus = async function() {
    const res = await axios.get('/ims-react/sub_menus');
    return res.data;
}

export {getSubMenus};
