// import { useState } from 'react';
// Ressources
import "./SuggestionItem.css";
import placeholder from "../../assets/img/fan-art-placeholder.png";

export default function SuggestionItem({
  similar,
  configImageBase,
  clickHandler,
}) {
  return (
    <div className="suggestionList-list-show Show">
      <a href="#" onClick={() => clickHandler(similar)} className="Show-link">
        <img
          src={
            similar.backdrop_path
              ? `${configImageBase}${similar.backdrop_path}`
              : placeholder
          }
          alt={"tvShow fan Art : " + similar.original_name}
          className="Show-img"
        />
        <h3 className="Show-title">{similar.original_name}</h3>
      </a>
    </div>
  );
}
