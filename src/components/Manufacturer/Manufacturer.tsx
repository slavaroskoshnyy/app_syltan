import React from "react";
import cl from "./Manufacturer.module.scss";
import MyChekbox from "../UI/checkbox/MyChekbox";

export default function Manufacturer() {
  const manufacturer = [
    { name: "Grifon", size: 56 },
    { name: "Boyscout", size: 66 },
    { name: "Paclan", size: 166 },
    { name: "Булгари Грин", size: 21 },
    { name: "Нэфис", size: 22 },
  ];

  return (
    <div className={cl.wrapper__cekbox}>
      {manufacturer.map((elem) => (
        <MyChekbox key={elem.name} name={elem.name} size={elem.size} />
      ))}
    </div>
  );
}
