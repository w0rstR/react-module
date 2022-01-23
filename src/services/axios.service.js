import {urls} from "../config/urls";
import baseURL from "../config/urls";
import axios from "axios";


const axiosService = axios.create({baseURL})

export default axiosService