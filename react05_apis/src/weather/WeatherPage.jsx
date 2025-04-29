import React, { useEffect, useState } from "react";
import css from "./WeatherPage.module.css";
import { getCurrentData } from "./useWeatherApi";
import { useSearchParams } from "react-router-dom";
import Button from "../weather/Button";
import { getCountryData } from "./useWeatherApi";

const WeatherPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city");
  const [weatherData, setWeatherData] = useState(null);

  const cityButtons = [
    { id: "current", label: "현재위치" },
    { id: "seoul", label: "서울" },
    { id: "tokyo", label: "도쿄" },
    { id: "new york", label: "뉴욕" },
    { id: "paris", label: "파리" },
  ];
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        let data;
        if (city) {
          data = await getCountryData(city);
        } else {
          data = await getCurrentData();
        }
        setWeatherData(data);
      } catch (err) {
        console.err(err);
      }
    };
    fetchWeatherData();
  }, [city]);

  const handleChangeCity = (city) => {
    if (city === "current") {
      setSearchParams({});
    } else {
      setSearchParams({ city });
    }
  };

  return (
    <main className={css.main}>
      <h2>WeatherPage</h2>
      <div className={css.weatherInfo}>
        <p className={css.location}>
          {weatherData?.sys.country} / {weatherData?.name}
        </p>
        <div className={css.temperature}>
          <p>{weatherData?.main.temp} &#8451;</p>
          <p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
              alt=""
            />
          </p>
        </div>
      </div>
      <div className={css.btnList}>
        {cityButtons.map((button) => (
          <Button
            key={button.id}
            city={button.id}
            label={button.label}
            onClick={handleChangeCity}
          />
        ))}
      </div>
    </main>
  );
};

export default WeatherPage;
