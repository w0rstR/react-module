import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Photo from "./components/Photo/Photo";

import {useEffect, useState} from "react";


function App() {
    const [tag, setTag] = useState('girl')

    const triggerTag = (t) => {
        setTag(t)
        console.log(t)
    }

    const triggerUpdate = (ta) => {
        setTag(ta)
        console.log(ta)
    }
    return (
        <div className={'container'}>
            <NavBar trigger={triggerTag}/>
            <Photo tag={tag} triggerUpdate={triggerUpdate}/>
        </div>
    );
}

export default App;
