import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Character from "../../components/Character/Character";
import {charactersService} from "../../services/characters.service";
import s from './EpisodeDetailsPage.module.css'

export default function EpisodeDetailsPage(){
    const parseCharacters=(arr)=>{
        let arrayOfId=[];

        arr.forEach(item=>{
            const splitedArr = item.split('/')
            arrayOfId.push(Number(splitedArr[splitedArr.length-1]))
        })

        return arrayOfId
    }
    const [characterList,setCharacterList] = useState([])
    const {state} = useLocation()



    useEffect(()=>{
        const arr=parseCharacters(state)
        charactersService.getCharacters(arr).then(value => setCharacterList(value))
        console.log(characterList)
    },[state])


    return(
        <div className={s.container}>
            {characterList ? characterList.map(character=><Character key={character.id} item={character}/>) : null}
        </div>
    )




}