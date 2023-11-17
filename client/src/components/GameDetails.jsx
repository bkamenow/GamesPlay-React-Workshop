import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as gamesService from "../services/gamesService";

export default function GameDetails() {
    const [gameDetails, setGameDetails] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        gamesService.getOneGame(gameId).then(setGameDetails);
    }, [gameId]);

    return (
        <section id='game-details'>
            <h1>Game Details</h1>
            <div className='info-section'>
                <div className='game-header'>
                    <img
                        className='game-img'
                        src={gameDetails.imageUrl}
                        alt={gameDetails.title}
                    />
                    <h1>{gameDetails.title}</h1>
                    <span className='levels'>
                        MaxLevel: {gameDetails.maxLevel}
                    </span>
                    <p className='type'>{gameDetails.category}</p>
                </div>

                <p className='text'>{gameDetails.summary}</p>

                <div className='details-comments'>
                    <h2>Comments:</h2>
                    <ul>
                        <li className='comment'>
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className='comment'>
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <p className='no-comment'>No comments.</p>
                </div>

                <div className='buttons'>
                    <Link to={`/game/edit/${gameId}`} className='button'>
                        Edit
                    </Link>
                    <Link to='#' className='button'>
                        Delete
                    </Link>
                </div>
            </div>

            <article className='create-comment'>
                <label>Add new comment:</label>
                <form className='form'>
                    <textarea
                        name='comment'
                        placeholder='Comment......'
                    ></textarea>
                    <input
                        className='btn submit'
                        type='submit'
                        value='Add Comment'
                    />
                </form>
            </article>
        </section>
    );
}
