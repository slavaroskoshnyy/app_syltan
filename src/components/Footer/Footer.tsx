import React from "react";
import cl from "./footer.module.css";
import MyButton from "../UI/button/MyButton";

import logo from "../../img/footer/logo.png";
import imgLoader from "../../img/Header/imgLoader.png";
import logo1 from "../../img/footer/logo1.png";
import logo2 from "../../img/footer/logo2.png";
import visa1 from "../../img/footer/Visa1.png";
import visa2 from "../../img/footer/Visa2.png";

export default function Footer() {
  return (
    <footer className={cl.footer}>
      <div className="container">
        <div className={cl.footer__row}>
          <div className={cl.footer_colum1}>
            <img className={cl.footer__leibl} src={logo} alt="" />
            <div className={cl.footer__text}>
              Компания «Султан» — снабжаем розничные магазины товарами
              <br />
              "под ключ" в Кокчетаве и Акмолинской области
            </div>
            <p>Подпишись на скидки и акции</p>
            <div className={cl.wrapper__input}>
              <input
                className={cl.footer__imput}
                type="text"
                placeholder="Введите ваш E-mail"
              />
              <div className={cl.imput__go}>
                <div></div>
              </div>
            </div>
          </div>
          <div className={cl.footer__colum2}>
            <h3>Меню сайта:</h3>
            <a href="/">О компании</a>
            <a href="/">Доставка и оплата</a>
            <a href="/">Возврат</a>
            <a href="/">Контакты</a>
          </div>
          <div className={cl.footer__colum3}>
            <h3>Категории:</h3>
            <a href="/">Бытовая химия</a>
            <a href="/">Косметика и гигиена</a>
            <a href="/">Товары для дома</a>
            <a href="/">Товары для детей и мам</a>
            <a href="/">Посуда</a>
          </div>
          <div className={cl.footer__colum4}>
            <h3>Скачать прайс-лист:</h3>
            <MyButton
              className={cl.footerBtn__price}
              name="Прайс-лист"
              src={imgLoader}
            />
            <p>Связь в мессенджерах:</p>
            <div className={cl.footer__contacts}>
              <a href="/">
                <div className={cl.logo__watsap}>
                  <img src={logo1} alt="" />
                </div>
              </a>
              <a href="/">
                <div>
                  <img src={logo2} alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className={cl.footer__colum5}>
            <h3>Контакты:</h3>
            <div className={cl.textInfo}>
              <a href="tel:+7(777)490-00-91">+7(777)490-00-91</a>
              <p>время работы: 9:00-20:00</p>
              <p>Заказать звонок</p>
            </div>
            <div className={cl.footer__mail}>
              <a href="/">opt.sultan@mail.ru</a>
              <p>На связи в любое время</p>
            </div>
            <div className={cl.footer__payment}>
              <a href="/">
                <img src={visa1} alt="" />
              </a>
              <a href="/">
                <img src={visa2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
