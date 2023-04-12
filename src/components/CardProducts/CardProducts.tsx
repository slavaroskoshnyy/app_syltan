import MyButton from "../UI/button/MyButton";
import basket from "../../img/basket.png";
import cl from "./CardProducts.module.scss";

export default function FileProcess(props: any): any {
  return (
    <div className={cl.column} >
      <div className={cl.item__wrapper}>
        <div className={cl.item__content}>
          <img
            className={cl.item__img}
            src={props.prod.img}
            alt="Это картинка товара, но я её не смог вставить"
          />
          <div className={cl.item__size}>
            <img src={props.prod.img2} alt="тоже не смог" />
            <p>{props.prod.size}</p>
            <p> {props.prod.sizeType}</p>
          </div>
          <div className={cl.item__name}>
            <p>
              <span>{props.prod.name} </span>
              {props.prod.description}
            </p>
          </div>
          <div className={cl.item__texst}>
            <p>
              <span>Штрихкод:</span> {props.prod.barcode}
            </p>
            <p>
              <span>Производитель:</span> {props.prod.brand}
            </p>
            <p>
              <span>Бренд:</span> {props.prod.generator}
            </p>
          </div>
        </div>
        <div className={cl.item__price}>
          <p>{props.prod.const} </p>
          <MyButton className={cl.item__btn} src={basket} name="В корзину" />
        </div>
      </div>
    </div>
  );
}
