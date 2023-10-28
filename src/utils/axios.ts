import OgAxios from 'axios'
import { toast } from 'react-hot-toast'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axios = OgAxios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': '6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
})

axios.interceptors.response.use(undefined, (error) => {
  if (error?.response?.data?.message && typeof window === 'object') {
    toast.error(error?.response?.data?.message)
  }

  throw error
})

export default axios
