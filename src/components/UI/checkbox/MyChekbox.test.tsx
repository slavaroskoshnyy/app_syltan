import { render, screen } from "@testing-library/react";

import MyChekbox from "./MyChekbox";

describe("MyChekbox component", () => {
  it("renders MyChekbox component", () => {
    render(<MyChekbox name={"Grifon"} size={56} />);

    expect(screen.getByText(/Grifon/i)).toBeInTheDocument();
  });
  it("styles works", () => {
    render(<MyChekbox name={"Grifon"} size={56} />);

    expect(screen.getByRole("checkbox")).toHaveClass("input");
  });
  it("MyChekbox snapshot", () => {
    const view = render(<MyChekbox name={"Grifon"} size={56} />);

    expect(view).toMatchSnapshot();
  });
});
