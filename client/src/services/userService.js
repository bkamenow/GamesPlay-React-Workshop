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
