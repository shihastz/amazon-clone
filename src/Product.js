import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStatevalue } from "./StateProvider";
//import { useSnackbar } from "notistack";

function Product({ id, title, price, image, rating }) {
  //const enqueueSnackbar = useSnackbar();
  const [{ basket }, dispatch] = useStatevalue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });

    //enqueueSnackbar('my message goes here', { variant: true });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>
          <strong>{title}</strong>
        </p>
        <div className="product__rating">
          {/* ⭐ */}
          <Rating name="read-only" value={rating} readOnly />
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <img alt="" src={image} />
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
