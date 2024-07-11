import { DateTime } from "luxon";

const API_KEY = "10d5bc2507d4920f722b66cb24508573";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  // console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = (data) => {
  console.log(data);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    speed,
    details,
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};

const formatForecastWeather = (secs, offset, data) => {
  //hourly
  const hourly = data.filter((f) => f.dt > secs).slice(0, 5);
  mao((f) => ({
    temp: f.main.temp,
    title: formatToLocalTime(f.dt, offset, "hh:mm a"),
    data: f.dt_txt,
  }));

  //daily

  return { hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((dt) => formatForecastWeather(dt, timezone, data.list));
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
