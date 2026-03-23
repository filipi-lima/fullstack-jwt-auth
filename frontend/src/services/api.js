const BASE_URL = "http://localhost:8080"

const userRegister = async (name, email, password) => {
    return await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });
};

const userLogin = async (email, password) => {
    return await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
};

const authentication = async (token) => {
    return await fetch(`${BASE_URL}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
};

export default {
    userRegister,
    userLogin,
    authentication
};
