import React, { FC } from "react";
import cl from "./header.module.css";

// import { ICartItem } from "../../types";

import logoImg from "../../img/Header/logo.png";
import cartIcon from "../../img/Header/cart.png";
import Fbtn from "../../img/Header/FrameBtn.png";
import operator from "../../img/Header/2.png";
import imgLoader from "../../img/Header/imgLoader.png";
import MyButton from "../UI/button/MyButton";
import Input from "../UI/input/Input";

export const Header: FC = () => {
  return (
    <div className={cl.headers__wrapper}>
      <div className="container">
        <div className={cl.header}>
          <img className={cl.header__img} src={logoImg} alt="" />
          <MyButton
            className={cl.headerBtn__catalog}
            name="Каталог"
            src={Fbtn}
          />
          <Input />
          <div className={cl.textInfo}>
            <a href="tel:+7(777)490-00-91">+7(777)490-00-91</a>
            <p>время работы: 9:00-20:00</p>
            <p>Заказать звонок</p>
          </div>
          <img src={operator} alt="" />
          <MyButton
            className={cl.headerBtn__price}
            name="Прайс-лист"
            src={imgLoader}
          />
          <button className={cl.header__btn}>
            <img src={cartIcon} alt="" />{" "}
          </button>
          <div>
            <p>Корзина</p>
            <p className={cl.price}> 0 ₸ </p>
          </div>
        </div>
      </div>
    </div>
  );
};
