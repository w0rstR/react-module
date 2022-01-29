import Cat from "../Cat/Cat";
import s from "./CatList.module.css"

export default function CatList({state}){
    return(
        <div className={s.container}>
            <div className={s.item}>Cat list</div>
            {state ? state.map((item,index)=><Cat item={item} key={index}/>) : null}
        </div>
    )
}