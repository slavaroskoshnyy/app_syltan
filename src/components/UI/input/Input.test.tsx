import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

const onChange = jest.fn();

describe("Input component", () => {
  it("renders Input", () => {
    render(<Input />);

    expect(screen.getByPlaceholderText(/Поиск/i)).toBeInTheDocument();
  });
  it("onChange works", () => {
    render(<Input onChange={onChange} />);

    userEvent.type(screen.getByRole("textbox"), "React");

    expect(onChange).toHaveBeenCalledTimes(5);
  });
  it("Input snapshot", () => {
    const view = render(<Input />);

    expect(view).toMatchSnapshot();
  });
});
