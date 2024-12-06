import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const loginUser = (credentials) => API.post("/users/login", credentials);
export const registerUser = (data) => API.post("/users/register", data);
export const fetchPosts = () => API.get("/posts");
export const createPost = (postData) => API.post("/posts", postData);
