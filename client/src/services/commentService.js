const baseURL = "http://localhost:3030/jsonstore/comments";

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
    });

    const response = await fetch(`${baseURL}?${query}`);
    const result = await response.json();

    // TODO: temp solution until migration to collections service
    return Object.values(result).filter((comment) => comment.gameId === gameId);
};

export const create = async (gameId, username, text) => {
    const response = await fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            gameId,
            username,
            text,
        }),
    });

    const newComment = await response.json();
    return newComment;
};
