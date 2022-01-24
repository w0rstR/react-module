import s from './Layout.module.css'
import {Link,Outlet} from "react-router-dom";
export default function Layout(){
    return(
        <div>
            <div className={s.container}>
                <Link to={"episode"}><p className={s.item}>Go to Episode</p></Link>
            </div>
            <Outlet/>
        </div>
    )
}