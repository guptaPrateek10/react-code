import Axios from "axios";

const KEY = "AIzaSyDPqBL5vC3hGA_-fotcEenjKKIETYHS4EE";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    // type: "video",
  },
});
