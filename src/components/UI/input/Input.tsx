import React from "react";
import cl from "./Input.module.scss";
import search from "../../../img/Header/search.png";

export default function Input({ ...props }: any) {
  return (
    <div className={cl.wrapper__input}>
      <input {...props} type="text" placeholder="Поиск..." />
      <div className={cl.imgSearch}>
        <img src={search} alt="" />
      </div>
    </div>
  );
}
