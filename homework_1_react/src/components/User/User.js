import './style.css'
export default function User({userName,userId,idHendler}){
    return(
        <div className={'user-item'}>
            <div>Name: {userName}</div>
            <button className={'btn'} onClick={()=>idHendler(userId)}>Show posts</button>
        </div>
    )
}