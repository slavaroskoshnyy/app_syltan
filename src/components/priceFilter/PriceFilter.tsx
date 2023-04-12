import React from "react";
import cl from "./PriceFilter.module.scss";

export default function PriceFilter() {
  return (
    <div className={cl.wrapper}>
      <p className={cl.title}>
        Цена <span>₸</span>{" "}
      </p>
      <div className={cl.conteiner}>
        <input type="number" name="" id="" defaultValue={0} />
        <p>-</p>
        <input type="number" name="" id="" defaultValue={10000} />
      </div>
    </div>
  );
}
