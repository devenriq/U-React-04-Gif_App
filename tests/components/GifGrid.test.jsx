import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GirGrid";

describe("Testing the GifGrid component", () => {
  const category = "one punch";

  test("should show the loading", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should show items when the images are loaded", () => {});
});
