// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8b7f7d685453d057df756a3e33636d45
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// 좌표로 날씨 정보 가져오기
export const getWeatherByCurrentLocation = async (lat, lon) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    );
    return res.data;
  } catch (error) {
    console.log("날씨 가져오기 실패", error);
  }
};
// 현재 위치 날씨 정보 가져오기
// 현재 좌표 가져오기
export const getCurrentData = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await getWeatherByCurrentLocation(latitude, longitude);
        resolve(res);
      },
      (err) => {
        console.log("좌표 가져오기 실패", err);
        reject(err);
      }
    );
  });
};

// 도시명으로 날씨정보 가져오기
export const getCountryData = async (city) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&lang=kr&units=metric`
    );
    return res.data;
  } catch (error) {
    console.lor(error);
  }
};
