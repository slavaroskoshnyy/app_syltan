import { render, screen } from "@testing-library/react";

import Categories from "./Categories";

describe("Categories component", () => {
  it("Categories renders", () => {
    render(<Categories />);

    expect(screen.getByRole("text")).toBeInTheDocument();
    expect(screen.getByText("Уход за телом")).toBeInTheDocument();
    expect(screen.getByText("Средства для загара")).toBeInTheDocument();
    expect(screen.getByText("Бумажная продукция")).toBeInTheDocument();
  });
  it("Categories snapshot", () => {
    const view = render(<Categories />);

    expect(view).toMatchSnapshot();
  });
});
