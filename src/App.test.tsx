import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
  it("App renders", () => {
    render(<App />);

    expect(screen.getByText(/ПОДБОР ПО ПАРАМЕТРАМ/i)).toBeInTheDocument();
    expect(screen.getByText(/Уход за волосами/i)).toBeInTheDocument();
  });
  it("typing in Seachbox works", () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getAllByRole("textbox")[1], "React");

    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument();
  });
  it("seach filter is working", () => {
    render(<App />);

    expect(screen.getAllByText(/Grifon/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Grifon/)[1]).toBeInTheDocument();
    expect(screen.getAllByText(/Boyscout/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Boyscout/)[1]).toBeInTheDocument();

    userEvent.type(screen.getAllByRole("textbox")[1], "grifon");

    expect(screen.getAllByText(/Grifon/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Grifon/)[1]).toBeInTheDocument();
    expect(screen.getAllByText(/Boyscout/)[0]).toBeInTheDocument();
    expect(screen.queryAllByText(/Boyscout/)[1]).toBeUndefined();
  });

  it("App snapshot", () => {
    const view = render(<App />);

    expect(view).toMatchSnapshot();
  });
});
