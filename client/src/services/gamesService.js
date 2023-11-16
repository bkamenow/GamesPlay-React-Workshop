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
