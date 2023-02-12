import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Naruto"]);

  const onAddCategory = () => {
    setCategories([...categories, "hola"]);
  };

  console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />

      {/* Listado de gifs */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
