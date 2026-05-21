import axios from "axios";

const API = axios.create({
  baseURL: "https://nukia-backend.onrender.com/api/",
});

export default API;
