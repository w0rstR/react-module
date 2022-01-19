export default function Comments({item}){
    return(
        <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.email}</div>
            <div>{item.body}</div>
        </div>
    )
}