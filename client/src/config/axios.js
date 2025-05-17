import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:7700",
    headers: {
        "Content-Type": "application/json",
    },
});

export default Axios;