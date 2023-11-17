import { Routes, Route } from "react-router-dom";
import CreateGamePage from "./components/CreateGamePage";
import EditGamePage from "./components/EditGamePage";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";

function App() {
    return (
        <div id='box'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/catalogue' element={<Catalogue />} />
                <Route path='/game/create' element={<CreateGamePage />} />
                <Route path='/game/edit/:gameId' element={<EditGamePage />} />
                <Route path='/game/details/:gameId' element={<GameDetails />} />
            </Routes>
        </div>
    );
}

export default App;
