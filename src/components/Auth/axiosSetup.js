import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/auth";
axios.defaults.headers.common["Content-Type"] = "aplication/json";
export default axios;
