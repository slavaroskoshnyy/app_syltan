import React from "react";
import cl from "./Navbar.module.css";

import img from "../../img/navbar/Group.png";
import img2 from "../../img/navbar/Group2.png";

export default function Navbar() {
  return (
    <div className={cl.nabvar__wrapper}>
      <div className="container">
        <div className={cl.navbar}>
          <div className={cl.navbar__info}>
            <div className={cl.info__adres}>
              <img src={img} alt="" />
              <div>
                <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                <p>(Рынок Восточный)</p>
              </div>
            </div>
            <div className={cl.info__email}>
              <img src={img2} alt="" />
              <div>
                <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
                <p>На связи в любое время</p>
              </div>
            </div>
          </div>
          <nav className={cl.navbar__nav}>
            <a href="/">О компании </a>
            <a href="/">Доставка и оплата</a>
            <a href="/">Возврат</a>
            <a href="/">Контакты</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
