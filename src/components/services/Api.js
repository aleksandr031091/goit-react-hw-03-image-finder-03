import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com";

const KEY = "20731826-485a6ef4f9f6fa0c1feddacae";

export const getImages = async (query = "", page = 1) => {
  try {
    const res = await axios.get(
      `/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
