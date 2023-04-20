import React from "react";
import CardCategories from "../UI/cardCategories/CardCategories";
import cl from "./Categories.module.scss";

export default function Categories() {
  const categories = [
    { name: "Уход за телом" },
    { name: "Уход за руками" },
    { name: "Уход за ногами" },
    { name: "Уход за лицом" },
    { name: "Уход за волосами" },
    { name: "Средства для загара" },
    { name: "Средства для бритья" },
    { name: "Подарочные наборы" },
    { name: "Гигиеническая продукция" },
    { name: "Гигиена полости рта" },
    { name: "Бумажная продукция" },
  ];
  return (
    <div className={cl.wrapper} role="text">
      {categories.map((elem) => (
        <CardCategories name={elem.name} key={elem.name} />
      ))}
    </div>
  );
}
