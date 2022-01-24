import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const charactersService = {
    getCharacters :(arr)=>axiosService.get(`${urls.characters}/${arr}`).then(value => value.data)
}