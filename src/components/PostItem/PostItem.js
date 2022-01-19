import {Link} from "react-router-dom";


export default function PostItem({item}){
    const {id,title} = item
    return(
        <div>
            <Link to={id.toString()} state={item}>{id} - {title}</Link>
        </div>
    )
}