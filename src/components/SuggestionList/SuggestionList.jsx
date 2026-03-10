// import { useState } from 'react';

// Ressources
import "./SuggestionList.css";
import placeholder from "../../assets/img/fan-art-placeholder.png";

// Composants
import SuggestionItem from "../SuggestionItem/SuggestionItem";

export default function SuggestionList({
  similars,
  configImageBase,
  clickHandler,
}) {
  console.log("Similaires : ", similars);
  //   setSimilars(null);

  return (
    <footer className="Wrapper-footer SuggestionList">
      <h2 className="SuggestionList-title">You'll probably also like</h2>
      <div className="SuggestionList-list">
        {similars.map((similar) => {
          return (
            <SuggestionItem
              key={"tvShow_" + similar.id}
              clickHandler={clickHandler}
              configImageBase={configImageBase}
              similar={similar}
            />
          );
        })}
      </div>
    </footer>
  );
}
