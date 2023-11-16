import { Link } from "react-router-dom";
import { checkIfUserIsLoggedIn, logoutUser } from "../services/userService";

export default function Header() {
    const isLoggedIn = checkIfUserIsLoggedIn();

    const handleLogout = () => {
        logoutUser();
        window.location.href = "/login";
    };

    return (
        <header>
            <h1>
                <Link to='/' className='home'>
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to='/catalogue'>All Games</Link>
                {isLoggedIn ? (
                    <div id='user'>
                        <Link to='/create-game'>Create Game</Link>
                        <Link to='/' onClick={handleLogout}>
                            Logout
                        </Link>
                    </div>
                ) : (
                    <div id='guest'>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
