import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div>
      <div className="forecast-details" data-testid="forecast-details">
        <div className="forecast-details__date">{formattedDate}</div>
        <div className="forecast-details__temperature">{temperature.min}</div>
        <div className="forecast-details__temperature">{temperature.max}</div>
        <div className="forecast-details__wind"> {wind.speed} </div>
        <div className="forecast-details__wind"> {wind.direction} </div>
        <div className="forecast-details__humidity">{humidity}</div>
      </div>
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
