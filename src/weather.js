import { useState, useEffect } from "react";

function Weather(props) {
  const [weather, setWeather] = useState({});
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

  try {
    const temp = weather["main"]["temp"];
    const wind = weather["wind"]["speed"];
    return (
      <div className="Weather">
        <h1>
          The temperature in {city} is {temp}{" "}
          {units === "imperial" ? "f" : units === "metric" ? "c" : "k"} and the
          wind speed is {wind}{" "}
          {units === "imperial" ? "mph" : units === "metric" ? "km/h" : "km/h"}
        </h1>
      </div>
    );
  } catch (err) {
    console.log(err);
    return (
      <div className="Weather">
        <h1>
          <p>error</p>
        </h1>
      </div>
    );
  }
}

export default Weather;
