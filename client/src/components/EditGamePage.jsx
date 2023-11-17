import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as gamesService from "../services/gamesService";

export default function EditGamePage() {
    const [gameDetails, setGameDetails] = useState({});
    const { gameId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        gamesService.getOneGame(gameId).then(setGameDetails);
    }, [gameId]);

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        try {
            const updatedGameData = {
                title: event.target.title.value,
                category: event.target.category.value,
                maxLevel: event.target.maxLevel.value,
                imageUrl: event.target.imageUrl.value,
                summary: event.target.summary.value,
            };

            await gamesService.updateGame(gameId, updatedGameData);

            navigate(`/game/details/${gameId}`);
        } catch (error) {
            console.error("Error updating game:", error);
        }
    };

    return (
        <section id='edit-page' className='auth'>
            <form id='edit' onSubmit={handleEditSubmit}>
                <div className='container'>
                    <h1>Edit Game</h1>

                    <label htmlFor='leg-title'>Legendary title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        defaultValue={gameDetails.title}
                    />

                    <label htmlFor='category'>Category:</label>
                    <input
                        type='text'
                        id='category'
                        name='category'
                        defaultValue={gameDetails.category}
                    />

                    <label htmlFor='levels'>MaxLevel:</label>
                    <input
                        type='number'
                        id='maxLevel'
                        name='maxLevel'
                        min='1'
                        defaultValue={gameDetails.maxLevel}
                    />

                    <label htmlFor='game-img'>Image:</label>
                    <input
                        type='text'
                        id='imageUrl'
                        name='imageUrl'
                        defaultValue={gameDetails.imageUrl}
                    />

                    <label htmlFor='summary'>Summary:</label>
                    <textarea
                        name='summary'
                        id='summary'
                        defaultValue={gameDetails.summary}
                    ></textarea>

                    <input
                        className='btn submit'
                        type='submit'
                        value='Edit Game'
                    />
                </div>
            </form>
        </section>
    );
}
