import React from "react";
import cl from "./ManufacturerFilter.module.scss";
import Input from "../UI/input/Input";
import Manufacturer from "../Manufacturer/Manufacturer";
import ShowAll from "../UI/showAll/ShowAll";

interface IManufacturerFilter {
  searchQuery: string;
  setSearchQuery: any;
}

export default function ManufacturerFilter({
  searchQuery,
  setSearchQuery,
}: IManufacturerFilter) {
  return (
    <div className={cl.wrapper}>
      <p className={cl.title}>Производитель</p>
      <Input
        className={cl.input}
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
      />
      <Manufacturer />
      <ShowAll />
      <hr style={{ margin: "15px 0", border: "1px dashed #3F4E65" }} />
    </div>
  );
}
