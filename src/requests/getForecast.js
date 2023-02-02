import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        /* eslint-disable-next-line no-console */
        console.error("Location is not valid, please try again", error);
      }
      if (status === 500) {
        console.error("Oh no! Server error, please try again", error);
      }
    });
};

export default getForecast;
