import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/users",
    headers: { "Content-Type": "application/json" }
});

export const registerUser = async (userData) => {
    return await API.post("/register", userData);
};

export const loginUser = async (loginData) => {
    return await API.post("/login", loginData);
};
