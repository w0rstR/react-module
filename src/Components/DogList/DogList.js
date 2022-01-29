import Dog from '../Dog/Dog';
import s from './DogList.module.css'

export default function DogList({state, del}) {
    const delItem = (id) => {
        del(id)
    }
    return (
        <div className={s.container}>
            <div className={s.item}>Dog list</div>
            {state ? state.map((item, index) => <Dog item={item} key={index} index={index} delItem={delItem}/>) : null}
        </div>
    )
}