import React, { FC } from "react";
import cl from "./MySelect.module.scss";

interface IProdycts {
  name: string;
  value: string;
}
interface IMySelect {
  prodycts: IProdycts[];
  value: string;
  onChange: FC;
  name: string;
}
export default function MySelect({
  prodycts,
  value,
  onChange,
  name,
}: IMySelect) {
  return (
    <p className={cl.title}>
      {name}:
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cl.select}
      >
        {prodycts.map((prodyct) => (
          <option key={prodyct.name} value={prodyct.value}>
            {prodyct.name}
          </option>
        ))}
      </select>
    </p>
  );
}
