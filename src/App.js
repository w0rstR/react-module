
import './App.css';
import {useEffect, useState} from "react";

import {episodeService} from "./services/episode.service";
import {Route,Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EpisodePage from "./pages/EpisodePage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage/EpisodeDetailsPage";

function App() {

  return (

    <div>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
                <Route path={'episode/:id'} element={<EpisodePage/>}/>
                <Route path={'episode/:id/details/:detailsId'} element={<EpisodeDetailsPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
