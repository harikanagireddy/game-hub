import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params :{
        key: 'a8810be940324a049875f8f42f951609'
    }
})