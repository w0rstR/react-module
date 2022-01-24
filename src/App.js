
import './App.css';
import {useEffect} from "react";

import {episodeService} from "./services/episode.service";
import {Route,Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EpisodePage from "./pages/EpisodePage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage/EpisodeDetailsPage";

function App() {
  useEffect(()=>{
    episodeService.getAll().then(value => console.log(value.results))
  })
  return (

    <div>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
                <Route path={'episode'} element={<EpisodePage/>}/>
                <Route path={'episode/details/:id'} element={<EpisodeDetailsPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
