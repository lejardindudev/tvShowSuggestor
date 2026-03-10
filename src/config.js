const BASE_URL = "https://api.themoviedb.org/3/";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWRlMjg5MzljNjIwYmJkNDNiOTY4MjUxYzZlNmNkMSIsIm5iZiI6MTc3MjgwNzExMy4wNCwic3ViIjoiNjlhYWUzYzkxZjNmMDBiNjNjMzE2OTFmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Nnn0gTwSDDM3eGTYPhl-B1onI-FX_hfbJLlcdKViyx0",
  },
};
const IMAGE_SMALL_BASE_URL = "http://image.tmdb.org/t/p/w342";
const IMAGE_MEDIUM_BASE_URL = "http://image.tmdb.org/t/p/w500";
const IMAGE_FULL_BASE_URL = "http://image.tmdb.org/t/p/w185";
export {
    BASE_URL,
    OPTIONS,
    IMAGE_SMALL_BASE_URL,
    IMAGE_MEDIUM_BASE_URL,
    IMAGE_FULL_BASE_URL,
}



/*
"poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
*/