import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const episodeService={
    getAll:()=>axiosService.get(urls.episodes).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.episodes}?page=${id}`).then(value => value.data)
}