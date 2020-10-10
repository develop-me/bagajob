import axios from "axios";

export default axios.create({
    baseURL: (process.env.NODE_ENV === 'production') ?
    "https://bagajob-api.developme.space/api/" // production
    : "http://homestead.test/api", // development
    // Headers:
    headers: {
        Accept: "application/json",
    },
});