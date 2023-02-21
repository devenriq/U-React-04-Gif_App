import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

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
      <GifGrid />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
