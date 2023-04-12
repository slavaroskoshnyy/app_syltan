import React from "react";
import cl from "./CardCategories.module.scss";

export default function CardCategories({ name }: any) {
  return (
    <div className={cl.text}>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}
