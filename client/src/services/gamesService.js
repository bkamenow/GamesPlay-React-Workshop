const baseURL = "http://localhost:3030";

export const fetchGames = async () => {
    try {
        const response = await fetch(`${baseURL}/jsonstore/games`);
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
        const response = await fetch(`${baseURL}/jsonstore/games`);
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
        const response = await fetch(`${baseURL}/jsonstore/games`, {
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
