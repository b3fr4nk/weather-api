import { useState, useEffect } from "react";

function Weather(props) {
  const [weather, setWeather] = useState({ main: { temp: "loading..." } });
  const { city, units } = props;
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeather(data);
      })
      .catch(() => {
        setWeather("error");
      });
  }, [city, units]);

  if (weather === "error" || weather["main"] === undefined) {
    return <h1>There was an error when trying to get the weather</h1>;
  }
  console.log(weather);

  return (
    <div className="Weather">
      <h1>
        The temperature in {city} is {weather["main"]["temp"]}{" "}
        {units === "imperial" ? "f" : units === "metric" ? "c" : "k"} and the
        wind speed is {weather["wind"]["speed"]}{" "}
        {units === "imperial" ? "mph" : units === "metric" ? "km/h" : "km/h"}
      </h1>
    </div>
  );
}

export default Weather;
