import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGames } from "../services/gamesService";

export default function Catalogue() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gamesData = await fetchGames();
                const gamesArray = Object.values(gamesData);

                // Reverse the order of the games array
                const reversedGames = gamesArray.reverse();

                setGames(reversedGames);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section id='catalog-page'>
            <h1>All Games</h1>

            {loading ? (
                <p>Loading...</p>
            ) : games.length > 0 ? (
                <div>
                    {games.map((game) => (
                        <div key={game._id} className='allGames'>
                            <div className='allGames-info'>
                                <img src={game.imageUrl} alt={game.title} />
                                <h6>{game.category}</h6>
                                <h2>{game.title}</h2>
                                <Link
                                    to={`/game-details/${game._id}`}
                                    className='details-button'
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h3 className='no-articles'>No games available</h3>
            )}
        </section>
    );
}
