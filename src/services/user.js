import api from "../configs/api";
import { getCookie } from "../utils/Cookie";


const token = getCookie("accessToken")

const getProfile = ()  => api.get("user/whoami" , {headers : {Authorization : `Bearer ${token}`}});

export default getProfile;