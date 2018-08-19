import axios from 'axios';

const API_KEY = 'd333acd6dd03fddb7be87a0266b33bf5';

const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${BASE_URL}&q=${city},tr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}