import s from './Header.module.css'
import {Link, Outlet} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <div className={s.header}>
                <Link className={s.item} href="home">Home</Link>
                <Link className={s.item} href="/about">About</Link>
                <Link className={s.item} href="/post">Post</Link>
            </div>
            <Outlet/>
        </div>
    )
}