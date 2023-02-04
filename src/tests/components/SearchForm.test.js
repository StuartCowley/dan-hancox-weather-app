import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("it renders correctly", () => {
  const validProps = {
    searchText: "Bristol",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders a search box and button", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
