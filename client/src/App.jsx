import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import GameCreate from "./components/game-create/GameCreate";
import GameEdit from "./components/game-edit/GameEdit";
import GameDetails from "./components/game-details/GameDetails";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Catalogue from "./components/game-list/Catalogue";
import Logout from "./components/logout/Logout";

function App() {
    const navigate = useNavigate({});
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate("/");
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(
            values.email,
            values.password
        );

        setAuth(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate("/");
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem("accessToken");
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.email,
    };

    return (
        <AuthProvider>
            <div id='box'>
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/games/:gameId' element={<GameDetails />} />
                    <Route path={Path.GameEdit} element={<GameEdit />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
