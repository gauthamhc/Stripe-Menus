import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
            aperiam? Perspiciatis ratione aliquid corrupti adipisci cum ipsa,
            alias accusantium temporibus ducimus. Beatae modi eligendi quas quis
            optio sint? Laborum, nobis.{" "}
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
