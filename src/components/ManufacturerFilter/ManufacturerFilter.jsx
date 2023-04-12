import React from "react";
import cl from "./ManufacturerFilter.module.scss";
import Input from "../UI/input/Input";
import Manufacturer from "../Manufacturer/Manufacturer";
import ShowAll from "../UI/showAll/ShowAll";

export default function ManufacturerFilter({ searchQuery, setSearchQuery }) {
  return (
    <div className={cl.wrapper}>
      <p className={cl.title}>Производитель</p>
      <Input
        className={cl.input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Manufacturer />
      <ShowAll />
      <hr style={{ margin: "15px 0", border: "1px dashed #3F4E65" }} />
    </div>
  );
}
