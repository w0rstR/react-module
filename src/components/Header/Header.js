import s from './Header.module.css'
import {Link, Outlet} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <div className={s.header}>
                <Link className={s.item} to="home">Home</Link>
                <Link className={s.item} to="user">User</Link>
                <Link className={s.item} to="about">About</Link>
                <Link className={s.item} to="post">Post</Link>
            </div>
            <Outlet/>
        </div>
    )
}