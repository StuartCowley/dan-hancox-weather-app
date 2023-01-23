import React from "react"
import PropTypes from "prop-types";

function ForecastSummary(props) {
    const {
        date,
        description,
        icon,
        temperature
    } = props;

    return <div class="forecast-summary"></div>;
};


export default ForecastSummary

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }).isRequired,
};
