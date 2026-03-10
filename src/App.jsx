import { useState, useEffect } from "react";
// API Helpers
import * as tvShowApi from "./api/tvShows";
// Constants
import { IMAGE_FULL_BASE_URL, IMAGE_SMALL_BASE_URL } from "./config";

// Components
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import TvShowDetails from "./components/TvShowDetails/TvShowDetails";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import "./App.css";

export default function App() {
  const [tvShow, setTvShow] = useState(null);
  const [config, setConfig] = useState(null);
  const [similars, setSimilars] = useState(null);
  const [found, setFound] = useState(null);

  const getPopular = async () => {
    try {
      const tvShows = await tvShowApi.fetchPopulars();
      if (tvShows.length > 0) {
        setTvShow(tvShows[0]);
      }
    } catch (error) {
      console.error("Error handler", error);
    }
  };

  const getConfig = async () => {
    try {
      const currentConfig = await tvShowApi.fetchConfig();
      setConfig(currentConfig);
    } catch (error) {
      console.error("Error handler config unreachabale", err);
    }
  };

  const getSimilars = async (tvShowId) => {
    try {
      const similarsShows = await tvShowApi.fetchSimilars(tvShowId);
      setSimilars(similarsShows.results);
    } catch (err) {
      alert("erreur d'affichage sur tv Shows similaires");
      console.error("Error handler", err);
    }
  };

  const getFound = async (string) => {
    try {
      const foundTvShows = await tvShowApi.fetchSringSearch(string);
      setTvShow(foundTvShows[0]);
    } catch (error) {
      alert("erreur d'affichage sur résultats de recherche");
      console.error("Error d'affichage résultats de recherche", error);
    }
  };

  // execute la requete une seule fois au démarrage du composant
  useEffect(() => {
    getConfig();
    getPopular();
    // Toujours undefined car affiche la valeur du premier render (avant le useEffect)
  }, []);

  // Conditionne l'existence de tvShow / execute la requete des que tvShow change
  useEffect(() => {
    if (tvShow) {
      console.log("Tv show : ", tvShow);
      // Toujours réel car conditionné et rafraichi à chaque render (useEffect ecoute les changements de tvShow)
      getSimilars(tvShow.id);
    }
  }, [tvShow]);

  // Sécurisation pour premier render
  if (!tvShow || !config) {
    return <p>Chargement...</p>;
  }

  // Fonctions personnalisées pour composants
  const sendDatasFromSimilarShow = (similarTvShow) => {
    setTvShow(similarTvShow);
  };

  const submitSearchForm = (data) => {
    getFound(data);
    console.log("Found tv shows : ", found);
  };
  return (
    <>
      <div className="Wrapper">
        <img
          src={`${IMAGE_FULL_BASE_URL}${tvShow.poster_path}`}
          alt="Moovie Fanart"
          className="Wrapper-img"
        />
        <div className="layout">
          <header className="Wrapper-header Header">
            <Logo />

            <Search handleSubmit={submitSearchForm} />
          </header>
          <TvShowDetails tvShow={tvShow} />
        </div>
        {/* Pas de resultats similaires */}
        {(!similars || similars.length === 0) && (
          <footer className="Wrapper-footer SuggestionList">
            <h2 className="SuggestionList-title">
              You'll probably also like :
            </h2>
            <p>Sorry, there is no similars tvShows matching with this tvShow</p>
          </footer>
        )}

        {/* Résultats similaires */}
        {similars && similars.length > 0 && (
          <SuggestionList
            similars={similars}
            configImageBase={IMAGE_SMALL_BASE_URL}
            clickHandler={sendDatasFromSimilarShow}
          />
        )}
      </div>
    </>
  );
}
