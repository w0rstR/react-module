import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const charactersService = {
    getAll:()=>axiosService.get(urls.characters).then(value => value.data)
}