import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Character from "../../components/Character/Character";

export default function EpisodeDetailsPage(){
    const parseCharacters=(arr)=>{
        let arrayOfId=[];

        arr.forEach(item=>{
            const splitedArr = item.split('/')
            arrayOfId.push(Number(splitedArr[splitedArr.length-1]))
        })

        return arrayOfId
    }
    const [idList,setIdList] = useState([])
    const {state} = useLocation()
    useEffect(()=>{
        const arr=parseCharacters(state)
        console.log(arr)
        setIdList(arr)
    },[])


    return(
        <div>
            {idList ? <Character item={idList}/> : null}
        </div>
    )




}