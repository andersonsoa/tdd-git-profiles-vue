import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

const instance = axios.create({
  // baseUrl: "https://api.github.com"
  adapter: httpAdapter
});

export default {
  async searchUser(username) {
    const res = await instance.get(`https://api.github.com/users/${username}`);
    return res.data;
  }
};
