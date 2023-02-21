describe("Pruebas en GifItem component", () => {
  const title = "Sitama";
  const url = "https://picsum.photos/200";

  test("should match with snapshot", () => {
    render(<GifItem title={title} url={url} />);
  });
});
