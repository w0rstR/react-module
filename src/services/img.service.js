import {urls} from "../config/urls";
import axiosService from "./axios.service";

export const imgService = {
    getImg:()=>axiosService.get(urls.car).then(value => value.data)
}


