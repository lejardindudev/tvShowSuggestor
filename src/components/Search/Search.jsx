/* import { useState } from 'react';*/
import "./Search.css";
import image from "../../assets/img/magnifying.svg";
export default function Search({ handleSubmit }) {
  const catchKeyToSubmit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      console.log("Sent : ", e.target.value);
      handleSubmit(e.target.value);
    }
  };

  return (
    <div className="Header-search Search">
      <form action="" className="Search-form">
        <label htmlFor="" className="Search-form-label">
          <img
            src={image}
            alt="magnificent search icon"
            className="Search-form-label-icon"
          />
        </label>
        <input
          onKeyUp={catchKeyToSubmit}
          type="text"
          className="Search-form-input"
        />
      </form>
    </div>
  );
}
