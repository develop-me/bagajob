import axios from "axios";

export default axios.create({
    // Deployment baseURL:
    // baseURL: "https://bagajob-api.developme.space/api/",
    // Development baseURL:
    baseURL: "http://homestead.test/api",
    // Headers:
    headers: {
        Accept: "application/json",
    },
});