import axios from 'axios';

const defaultAxios = axios.create();
defaultAxios.defaults.baseURL = 'https://kusitms.shop/';

export default defaultAxios;
