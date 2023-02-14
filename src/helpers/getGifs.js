export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=2RPEL51nbdby65j5BEAB2AtKjw9PAXNj&q=${category}&limit=10`;
  const response = await fetch(url);
  const data = await response.json();

  const gifs = data.data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};
