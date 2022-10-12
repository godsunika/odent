import * as dotenv from 'dotenv'
import axios from "axios";

dotenv.config()

export default axios.create({
  baseURL: process.env.IP_SERVICE,
  headers: {
    "Content-type": "application/json"
  }
});