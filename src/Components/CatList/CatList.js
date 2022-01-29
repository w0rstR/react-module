import Cat from '../Cat/Cat';
import s from './CatList.module.css'

export default function CatList({state, del}) {
    const delItem = (id) => {
        del(id)
    }
    return (
        <div className={s.container}>
            <div className={s.item}>Cat list</div>
            {state ? state.map((item, index) => <Cat item={item} key={index} index={index} delItem={delItem}/>) : null}
        </div>
    )
}