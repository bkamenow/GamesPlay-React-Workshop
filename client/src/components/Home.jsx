import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchRecentGames } from "../services/gamesService";

export default function Home() {
    const [recentGames, setRecentGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentGamesData = async () => {
            try {
                const recentGamesData = await fetchRecentGames();
                setRecentGames(recentGamesData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching recent games:", error);
                setLoading(false);
            }
        };

        fetchRecentGamesData();
    }, []);

    return (
        <section id='welcome-world'>
            <div className='welcome-message'>
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src='./images/four_slider_img01.png' alt='hero' />

            <div id='home-page'>
                <h1>Latest Games</h1>

                {loading ? (
                    <p>Loading...</p>
                ) : recentGames.length > 0 ? (
                    recentGames.map((game) => (
                        <div key={game._id} className='game'>
                            <div className='image-wrap'>
                                <img src={game.imageUrl} alt={game.title} />
                            </div>
                            <h3>{game.title}</h3>
                            <div className='rating'>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div className='data-buttons'>
                                <Link
                                    to={`/game-details/${game._id}`}
                                    className='btn details-btn'
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='no-articles'>No games yet</p>
                )}
            </div>
        </section>
    );
}
