import {useEffect, useState} from "react";
import {charactersService} from "../../services/characters.service";
import CharacterItem from "../CharacterItem/CharacterItem";

export default function Character({item}){
    const [characterList,setCharacterList] = useState()
    useEffect(()=>{
        charactersService.getCharacters(item).then(value => setCharacterList(value.results))
    },[item])
    return(
        <div>
            {characterList ? characterList.map(character=><CharacterItem key={character.id} item={character}/>) : null}
        </div>
    )
}