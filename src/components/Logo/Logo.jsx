/* import { useState } from 'react';*/
import "./Logo.css";
import logoImg from "../../assets/img/moovie-suggest.png";

export default function Logo() {
  return (
    <figure className="Header-logo Logo">
      <img src={logoImg} alt="logo" className="Logo-img" />

      <figcaption className="Logo-baseline">
        Find a show you may like
      </figcaption>
    </figure>
  );
}
