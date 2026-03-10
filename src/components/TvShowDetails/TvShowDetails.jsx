/* import { useState } from 'react';*/
import "./TvShowDetails.css";
import FiveStarRating from "../FiveStarRating/FiveStarRating";

export default function TvShowDetails(props) {
  return (
    <main className="Wrapper-content Content">
      <h1 className="Content-title">{props.tvShow.name}</h1>
      <FiveStarRating vote_average={props.tvShow.vote_average} />
      <div className="Content-description">
        {props.tvShow.overview
          ? props.tvShow.overview
          : "No overview writen yet"}
      </div>
    </main>
  );
}
