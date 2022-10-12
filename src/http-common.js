import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_IP_SERVICE,
  headers: {
    "Content-type": "application/json"
  }
});