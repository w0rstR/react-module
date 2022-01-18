
import './App.css';
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PostPage from "./pages/PostPage/PostPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Header/>}>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/post'} element={<PostPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
