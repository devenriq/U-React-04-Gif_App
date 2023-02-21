import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Testing on AddCategory component", () => {
  const inputValue = "Saitama";

  test("should change the value of the text-box", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe("Saitama");
  });

  test("should call onNewCategory if the input has some value", () => {
    //TODO ???

    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();

    expect(input.value).toBe("");
  });
});
