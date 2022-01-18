export default function User({item}){
    const {id,name,username} = item
    return(
        <div>
            Id: {id} --- Name: {name} --- Username: {username}
        </div>
    )
}