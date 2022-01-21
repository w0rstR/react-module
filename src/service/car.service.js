import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const carService={
    getAll:()=>axiosService.get(urls.cars).then(value => value.data)
}