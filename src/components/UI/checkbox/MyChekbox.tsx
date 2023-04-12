import React from "react";
import cl from "./MycheCkbox.module.scss";

export default function MyChekbox({ name, size }: any) {
  return (
    <div className={cl.wrapper}>
      <input
        className={cl.input}
        type="checkbox"
        name=""
        id={name}
        value={name}
      />
      <label className={cl.label} htmlFor={name}>
        {name}
      </label>
      <p className={cl.text}>({size})</p>
    </div>
  );
}
