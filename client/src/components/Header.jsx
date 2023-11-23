import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <header>
            <h1>
                <Link to='/' className='home'>
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to='/catalogue'>All Games</Link>
                {isAuthenticated && (
                    <div id='user'>
                        <Link to='/game/create'>Create Game</Link>
                        <Link to='/logout'>Logout</Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id='guest'>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
