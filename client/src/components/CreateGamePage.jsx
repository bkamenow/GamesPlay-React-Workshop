import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGame } from "../services/gamesService";

export default function CreatePage() {
    const [gameData, setGameData] = useState({
        title: "",
        category: "",
        maxLevel: 1,
        imageUrl: "",
        summary: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGameData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createGame(gameData);
            navigate("/catalogue");
        } catch (error) {
            console.error("Error creating game:", error);
        }
    };

    return (
        <section id='create-page' className='auth'>
            <form id='create' onSubmit={handleSubmit}>
                <div className='container'>
                    <h1>Create Game</h1>

                    <label htmlFor='leg-title'>Legendary title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Enter game title...'
                        value={gameData.title}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='category'>Category:</label>
                    <input
                        type='text'
                        id='category'
                        name='category'
                        placeholder='Enter game category...'
                        value={gameData.category}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='levels'>MaxLevel:</label>
                    <input
                        type='number'
                        id='maxLevel'
                        name='maxLevel'
                        min='1'
                        placeholder='1'
                        value={gameData.maxLevel}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='game-img'>Image:</label>
                    <input
                        type='text'
                        id='imageUrl'
                        name='imageUrl'
                        placeholder='Upload a photo...'
                        value={gameData.imageUrl}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='summary'>Summary:</label>
                    <textarea
                        name='summary'
                        id='summary'
                        value={gameData.summary}
                        onChange={handleInputChange}
                    ></textarea>

                    <input
                        className='btn submit'
                        type='submit'
                        value='Create Game'
                    />
                </div>
            </form>
        </section>
    );
}
