
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import CarsPage from "./pages/CarPage/CarPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (

    <div >
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'cars'} element={<CarsPage/>}/>
              <Route path={'cars'} element={<UserPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
