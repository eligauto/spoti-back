import axios from "axios";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const getAccessToken = async () => {
  const response = await axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    data: "grant_type=client_credentials",
  });

  return response.data.access_token;
};

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;