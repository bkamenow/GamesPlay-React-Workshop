import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                    // User is logged in
                    <div id='user'>
                        <Link to='/create-game'>Create Game</Link>
                        <Link to='/logout'>Logout</Link>
                    </div>
                ) : (
                    // User is not logged in
                    <div id='guest'>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
