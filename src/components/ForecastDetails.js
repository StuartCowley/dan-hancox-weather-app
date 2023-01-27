import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        <div>Min Temp: {temperature.min}&deg;C</div>
        <div>Max Temp: {temperature.max}&deg;C</div>
      </div>
      <div className="forecast-details__wind">
        <div>Wind Speed: {wind.speed}mph</div>
        <div>Wind Direction: {wind.direction}</div>
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
export default ForecastDetails;
