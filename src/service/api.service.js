import axios from "axios";
const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_PUBLIC_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const  ApiServic = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response
  }
}