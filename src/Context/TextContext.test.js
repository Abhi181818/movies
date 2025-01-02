import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import CounterProvider from "./TextContext";
import { Counter, CounterContext } from "./TextContext";

const renderWithContext = (component) => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>{component}</CounterProvider>
    ),
  };
};

afterEach(cleanup);

it("checks if the counter is 0", () => {
  const { getByTestId } = renderWithContext(<Counter />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});

it("increments the counter", () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrements the counter", () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("-1");
});