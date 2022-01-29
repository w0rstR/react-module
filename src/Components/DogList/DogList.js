import Dog from "../Dog/Dog";
import s from "./DogList.module.css"

export default function DogList({state}){
    return(
        <div className={s.container}>
            <div className={s.item}>Dog list</div>
            {state ? state.map(item=><Dog item={item}/>) : null}
        </div>
    )
}