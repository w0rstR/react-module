export default function Form(){
    return(
        <div>
            <form>
                <div><label>Model: <input type="text"/></label></div>
                <div><label>Price: <input type="text"/></label></div>
                <div><label>Year: <input type="text"/></label></div>
                <button>Create a new car</button>
            </form>
        </div>
    )
}