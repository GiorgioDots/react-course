import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-course-gd.firebaseio.com/",
});

export default instance;
