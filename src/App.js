
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Photo from "./components/Photo/Photo";
import {useEffect} from "react";
import {imgService} from "./services/img.service";

function App() {

  useEffect(()=>{
      imgService.getImg().then(value => console.log(value))
  },[])

  return (
    <div>
        <NavBar/>
        <Photo/>
    </div>
  );
}

export default App;
