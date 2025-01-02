import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import TestRouter from "./TestRouter";
const renderWithRouter = (component) => {
  return {
    ...render(
      <Router initialEntries={["/"]}>
        <TestRouter />
      </Router>
    ),
  };
};

describe("<TestRouter />", () => {
  it("should render the home page", () => {
    const { container, getByTestId } = renderWithRouter(<TestRouter />);
    const navbar = getByTestId("navbar");
    const link = getByTestId("home-link");

    expect(container.innerHTML).toMatch("Home page");
    expect(navbar).toContainElement(link);
  });

  it("should navigate to the about page", () => {
    const { container, getByTestId } = renderWithRouter(<TestRouter />);

    fireEvent.click(getByTestId("about-link"));

    expect(container.innerHTML).toMatch("About page");
  });

  it("should navigate to the contact page with the correct name", async () => {
    const { getByTestId } = renderWithRouter(<TestRouter />);

    fireEvent.click(getByTestId("contact-link"));
    await waitFor(() => {
      const contactNameElement = getByTestId("contact-name");
      expect(contactNameElement.textContent).toBe("John Doe");
    });
  });
});
