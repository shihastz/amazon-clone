import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        />
        <div className="home__row">
          <Product
            id={1}
            title="Lenovo 18.5 inch Thinkvision D19-10 Flat Panel Monitor with HDMI"
            price={4879}
            rating={3}
            image="https://m.media-amazon.com/images/I/51qDWNn7NaL._AC_UY218_.jpg"
          />
          <Product
            id={2}
            title="AGARO - 33184 Marvel 25-Litre Oven Toaster Grill"
            price={3798}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81jlhdJXsML._AC_UL270_SR270,270_.jpg"
          />
          <Product
            id={3}
            title="Amazon Brand - Solimo Wi-Fi Smart Light, 12W, B22 Holder"
            price={529}
            rating={3.2}
            image="https://m.media-amazon.com/images/I/71bltWjd65L._AC_UL320_.jpg"
          />
          <Product
            id={4}
            title="Amazon Brand - Solimo Microfibre Reversible Comforter"
            price={769}
            rating={4}
            image="https://m.media-amazon.com/images/I/91z-UC7wh4L._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
