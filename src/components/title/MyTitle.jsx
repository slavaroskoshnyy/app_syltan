import React from "react";
import MySelect from "../UI/selekt/MySelect";
import cl from "./MyTitle.module.scss";

export default function MyTitle({ title, selectedSort, sortPosts }) {
  return (
    <div className="container">
      <div className={cl.subtitle}>
        <p>Главная |</p>
        <p>Косметика и гигиена</p>
      </div>
      <div className={cl.wrapper__title}>
        <h1 className={cl.title}>{title}</h1>
        <MySelect
          name="Сортировка"
          value={selectedSort}
          onChange={sortPosts}
          // defaultValue="Сортировка"
          prodycts={[
            { value: "name", name: " По названию " },
            { value: "const", name: " По цене " },
          ]}
        />
      </div>
    </div>
  );
}
