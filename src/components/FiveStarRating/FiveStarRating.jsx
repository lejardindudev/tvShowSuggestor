import { useEffect } from "react";
import "./FiveStarRating.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";
/*


1   -> 1.49 => 1 + half
0.5 -> 0.99 => half
0   -> 0.49  => empty

*/

export default function FiveStarRating(props) {
  const rating = props.vote_average / 2;
  // avant la virgule
  const intRating = Math.floor(rating);
  // après la virgule
  const digitRating = rating - intRating;

  // Tableau d'étoiles
  const displayedStars = [];
  let count = 0;

  // Remplir displayedStars d'étoiles pleines:
  for (let i = 0; i < intRating; i++) {
    displayedStars.push(
      <StarFill key={"startFill" + i} className="Rating-stars-star" />,
    );
    count++;
  }

  // Tester présence halfStar
  if (intRating >= 0.5) {
    displayedStars.push(
      <StarHalf key="startHalf" className="Rating-stars-star" />,
    );
    count++;
  }

  // Remplir le reste avec emptyStars
  if (count < 5) {
    const restCount = 5 - count;
    for (let i = 0; i < restCount; i++) {
      displayedStars.push(
        <StarEmpty key={"starEmpty" + i} className="Rating-stars-star" />,
      );
    }
  }

  return (
    <div className="Content-rating Rating">
      <div className="Rating-stars">{displayedStars}</div>
      <div className="Rating-vote">{rating} / 5</div>
    </div>
  );
}
