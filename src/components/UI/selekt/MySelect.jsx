import React from "react";
import cl from "./MySelect.module.scss";

export default function MySelect({
  //   defaultValue,
  prodycts,
  value,
  onChange,
  name,
}) {
  return (
    <p className={cl.title}>
      {name}:
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cl.select}
      >
        {/* <option disabled value="">
          {defaultValue}
        </option> */}
        {prodycts.map((prodyct) => (
          <option key={prodyct.name} value={prodyct.value}>
            {prodyct.name}
          </option>
        ))}
      </select>
    </p>
  );
}
