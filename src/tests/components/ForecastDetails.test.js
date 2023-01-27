import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
    const validProps = {
        date: 1111111,
        humidity: 80,
        temperature: {
          max: 22,
          min: 12,
        },
        date: 2222222,      
        wind: {
          speed: 80,
          direction: "e",
        },
      };


it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
});

});