import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as gamesService from "../services/gamesService";
import * as commentService from "../services/commentService";

export default function GameDetails() {
    const [gameDetails, setGameDetails] = useState({});
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        gamesService.getOneGame(gameId).then(setGameDetails);
        commentService.getAll(gameId).then(setComments);
    }, [gameId]);

    const deleteGameHandler = async () => {
        try {
            await gamesService.deleteGame(gameId);

            navigate("/catalogue");
        } catch (error) {
            console.error("Error deleting game:", error);
        }
    };

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            gameId,
            formData.get("username"),
            formData.get("comment")
        );

        setComments((state) => [...state, newComment]);
    };

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
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className='comment'>
                                <p>
                                    {username}: {text}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className='no-comment'>No comments.</p>
                    )}
                </div>

                <div className='buttons'>
                    <Link to={`/game/edit/${gameId}`} className='button'>
                        Edit
                    </Link>
                    <a href='#' className='button' onClick={deleteGameHandler}>
                        Delete
                    </a>
                </div>
            </div>

            <article className='create-comment'>
                <label>Add new comment:</label>
                <form className='form' onSubmit={addCommentHandler}>
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
