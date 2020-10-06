import axios from "axios";

export default axios.create({
    baseURL: "https://bagajob-api.developme.space/api/",
    headers: {
        Accept: "application/json",
    },
});