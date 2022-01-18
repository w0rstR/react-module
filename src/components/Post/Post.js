export default function Post({item}){
    const {id,title,body} = item
    return(
        <div>
            <div>Post id: {id}</div>
            <div>Tittle: {title}</div>
            <div>Body: {body}</div>
        </div>
    )
}