import {useParams} from 'react-router-dom';

import PostList from '../../Components/PostList/PostList';

export default function UserDetailsPage() {
    const {id} = useParams();
    return (
        <div>
            <PostList id={id}/>
        </div>
    )
}