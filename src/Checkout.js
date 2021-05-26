import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CheckoutProduct from "./CheckoutProduct";
import { useStatevalue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStatevalue();
  return (
    <div className="checkout">
      <Carousel autoPlay>
        <div>
          <img
            className="home__image"
            alt=""
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSaheli/SB-Top-banner-desktop-3000x600-v3.jpg"
          />
        </div>
        <div>
          <img
            className="home__image"
            alt=""
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Hdpns_Gw_1500x600._CB415716258_.jpg"
          />
        </div>
        <div>
          <img
            className="home__image"
            alt=""
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg"
          />
        </div>
      </Carousel>

      <div className="checkout__bottom">
        <div className="checkout__left">
          <div>
            <p className="checkout__user">{user ? `Helow, ${user.email}` : ""}</p>
            <h2 className="checkout__title">Shopping Cart</h2>
            {basket.length > 0 ? (
              basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            ) : (
              <h4>Your Cart is Empty</h4>
            )}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
