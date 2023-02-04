import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
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
        setErrorMessage("This isn't a valid town or city, please try again");
        /* eslint-disable-next-line no-console */
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Whoops! server error, please give it another try");
        /* eslint-disable-next-line no-console */
        console.error("Oh no! Server error", error);
      }
    });
};

export default getForecast;
