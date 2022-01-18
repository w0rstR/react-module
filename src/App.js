
import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <div className="App">
        <div className="header">
          <a className={'item'} href="/home">Home</a>
          <a className={'item'} href="/about">About</a>
          <a className={'item'} href="/post">Post</a>
        </div>

        <Routes>
            <Route path={'/home'} component={<HomePage/>}/>
            <Route path={'/about'} component={<AboutPage/>}/>
            <Route path={'/post'} component={<PostPage/>}/>
        </Routes>

    </div>
  );
}

export default App;
