import axios from "axios"

const getMenus = async function() {
    const res = await axios.get('/ims-react/menus');
    return res.data;
}

export {getMenus};
