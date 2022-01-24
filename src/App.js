
import './App.css';
import {useEffect} from "react";
import {charactersService} from "./services/characters.service";
import {episodeService} from "./services/episode.service";

function App() {
  useEffect(()=>{
    episodeService.getAll().then(value => console.log(value))
  })
  return (

    <div>
        123
    </div>
  );
}

export default App;
