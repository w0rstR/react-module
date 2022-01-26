import {useEffect, useState} from "react";

export default function CharacterItem({item}){
    const [items,setItems]=useState()
    useEffect(()=>{
        setItems(item)
    },[])
    return(
        <div>
            <div>
                <div>Id:</div>
                <div>Name: </div>
                <div>Status: </div>
                <div>

                </div>
            </div>
        </div>
    )
}