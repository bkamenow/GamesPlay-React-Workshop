const baseURL = "http://localhost:3030/jsonstore/games";

export const fetchGames = async () => {
    try {
        const response = await fetch(`${baseURL}`);
        if (!response.ok) {
            throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};

export const fetchRecentGames = async () => {
    try {
        const response = await fetch(`${baseURL}`);
        if (!response.ok) {
            throw new Error("Failed to fetch recent games");
        }
        const data = await response.json();
        const gamesArray = Object.values(data);

        const reversedGames = gamesArray.reverse();

        const recentGames = reversedGames.slice(0, 3);

        return recentGames;
    } catch (error) {
        console.error("Error fetching recent games:", error);
        throw error;
    }
};

export const createGame = async (gameData) => {
    try {
        const response = await fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gameData),
        });

        if (!response.ok) {
            throw new Error("Failed to create game");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating game:", error);
        throw error;
    }
};

export const getOneGame = async (gameId) => {
    try {
        const response = await fetch(`${baseURL}/${gameId}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch game with ID ${gameId}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching game details:", error);
        throw error;
    }
};

export const updateGame = async (gameId, updatedGameData) => {
    try {
        const response = await fetch(`${baseURL}/${gameId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedGameData),
        });

        if (!response.ok) {
            throw new Error(`Failed to update game with ID ${gameId}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error updating game:", error);
        throw error;
    }
};
