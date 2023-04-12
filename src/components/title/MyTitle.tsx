import React from "react";
import MySelect from "../UI/selekt/MySelect";
import cl from "./MyTitle.module.scss";

interface IMyTitile {
  title?: string;
  selectedSort: string;
  sortPosts: any;
}

export default function MyTitle({ title, selectedSort, sortPosts }: IMyTitile) {
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
          prodycts={[
            { value: "name", name: " По названию " },
            { value: "const", name: " По цене " },
          ]}
        />
      </div>
    </div>
  );
}
