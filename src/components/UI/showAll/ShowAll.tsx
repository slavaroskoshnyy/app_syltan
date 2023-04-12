import React from "react";
import cl from "./ShowAll.module.scss";

export default function ShowAll() {
  return (
    <div className={cl.wrapper}>
      Показать все <div className={cl.triangle__down}></div>
    </div>
  );
}
