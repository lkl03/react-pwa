import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '0f76db0bb3271e896f5674b118bc6b79'

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data
}