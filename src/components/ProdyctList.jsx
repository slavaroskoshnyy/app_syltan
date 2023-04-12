import React from "react";
import CardProducts from "./CardProducts/CardProducts";

export default function ProdyctList({ items }) {
  return (
    <div className="row">
      {items.map((prod) => (
        <CardProducts prod={prod} key={prod.id} /> //! prod
      ))}
    </div>
  );
}
