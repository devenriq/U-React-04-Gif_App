import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Naruto"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    console.log(newCategory.toLowerCase());
    setCategories([newCategory, ...categories]);
  };

  // console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de gifs */}
      <ol>
        {categories.map((category, i) => {
          return <li key={category + i}>{category}</li>;
        })}
      </ol>
    </>
  );
};
