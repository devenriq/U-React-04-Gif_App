import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {images.map(({ id, title, url }) => (
        <div className="card" key={id}>
          <h3>{title}</h3>
          <img src={url} alt="" />
        </div>
      ))}
    </>
  );
};
