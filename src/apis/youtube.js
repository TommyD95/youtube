import axios from "axios";

const API_KEY="AIzaSyDfuEonDLfga4iV5cxEG_2Fdw0NRzV-51s";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:API_KEY,
    }
});