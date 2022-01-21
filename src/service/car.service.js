import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const carService={
    getAll:()=>axiosService.get(urls.cars).then(value => value.data),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    createCar:(car)=>axiosService.post(urls.cars, car).then(value => value.data)
}