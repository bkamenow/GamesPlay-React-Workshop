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
        // Assuming data is an object with game IDs as keys
        const gamesArray = Object.values(data);
        const recentGames = gamesArray.slice(0, 3);
        return recentGames;
    } catch (error) {
        console.error("Error fetching recent games:", error);
        throw error;
    }
};
