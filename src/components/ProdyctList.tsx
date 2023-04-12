import React from "react";
import CardProducts from "./CardProducts/CardProducts";

export default function ProdyctList({ items }: any) {
  return (
    <div className="row">
      {items.map((prod: any) => (
        <CardProducts prod={prod} key={prod.id} /> //! prod
      ))}
    </div>
  );
}
