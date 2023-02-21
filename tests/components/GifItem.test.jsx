import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem component", () => {
  const title = "Saitama";
  const url = "https://picsum.photos/200";

  test("should match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the url of the image and its alt", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title of the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
    screen.debug();
  });
});
