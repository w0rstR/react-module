
import './App.css';
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import UserPostPage from "./pages/UserPostPage/UserPostPage";
import Header from "./components/Header/Header";
import UserPage from "./pages/UserPage/UserPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import PostPage from "./pages/PostPage/PostPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostCommentPage from "./pages/PostCommentPage/PostCommentPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Header/>}>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'user'} element={<UserPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostPage/>}/>
                    </Route>
                </Route>
                <Route path={'post'} element={<PostPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<PostCommentPage/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
