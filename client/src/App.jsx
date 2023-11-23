import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";

import CreateGamePage from "./components/CreateGamePage";
import EditGamePage from "./components/EditGamePage";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import Logout from "./components/Logout";

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
        <AuthContext.Provider value={values}>
            <div id='box'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                    <Route path='/game/create' element={<CreateGamePage />} />
                    <Route
                        path='/game/edit/:gameId'
                        element={<EditGamePage />}
                    />
                    <Route
                        path='/game/details/:gameId'
                        element={<GameDetails />}
                    />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
