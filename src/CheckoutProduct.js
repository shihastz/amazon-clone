import React from "react";
import "./CheckoutProduct.css";
import Rating from "@material-ui/lab/Rating";
import { useStatevalue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStatevalue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img src={image} alt="" className="CheckoutProduct__image" />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          <Rating name="read-only" value={rating} readOnly />
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
