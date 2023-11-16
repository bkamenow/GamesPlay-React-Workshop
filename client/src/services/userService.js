const baseURL = "http://localhost:3030";

export const registerUser = async (email, password) => {
    const registerURL = `${baseURL}/jsonstore/users`;

    try {
        const res = await fetch(registerURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const data = await res.json();

        if (res.ok) {
            return "/login";
        } else {
            console.error("Registration failed", data);
            throw new Error("Registration failed");
        }
    } catch (error) {
        console.error("Registration failed", error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    const usersURL = `${baseURL}/jsonstore/users`;

    try {
        const response = await fetch(usersURL);

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        const users = await response.json();
        const user = Object.values(users).find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            throw new Error(
                "Invalid email or password. Please check your credentials."
            );
        }

        const authToken = user.id;

        localStorage.setItem("authToken", authToken);

        return { authToken, user };
    } catch (error) {
        throw error;
    }
};

export const checkIfUserIsLoggedIn = () => {
    const authToken = localStorage.getItem("authToken");
    return authToken !== null;
};

export const logoutUser = () => {
    localStorage.removeItem("authToken");
};
