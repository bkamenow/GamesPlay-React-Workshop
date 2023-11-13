import CreateGamePage from "./components/CreateGamePage";
import EditGamePage from "./components/EditGamePage";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import WelcomeWorld from "./components/WelcomeWorld";
import Catalogue from "./components/Catalogue";

function App() {
    return (
        <div id='box'>
            <Header />

            <main id='main-content'></main>

            <WelcomeWorld />

            <LoginPage />

            <RegisterPage />

            <CreateGamePage />

            <EditGamePage />

            <GameDetails />

            <Catalogue />
        </div>
    );
}

export default App;
