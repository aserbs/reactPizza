import React, { useState } from "react";

function Categories({ value, onClickCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегитарианская",
    "Гриль",
    "Острое",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={value == index ? "active" : ""}
            onClick={() => {
              onClickCategory(index);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
