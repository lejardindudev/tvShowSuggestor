// const BASE_URL = "https://api.themoviedb.org/3/";
// const OPTIONS = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWRlMjg5MzljNjIwYmJkNDNiOTY4MjUxYzZlNmNkMSIsIm5iZiI6MTc3MjgwNzExMy4wNCwic3ViIjoiNjlhYWUzYzkxZjNmMDBiNjNjMzE2OTFmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Nnn0gTwSDDM3eGTYPhl-B1onI-FX_hfbJLlcdKViyx0",
//   },
// };

import getJson from "./httpClient"; 

let config = null;
let setPromise = null;
const fetchPopulars = async () => {
    const data = await getJson("tv/popular?language=fr-FR");
    return data.results;
}

const fetchConfig = async () => {
    // Préparation du cache de la requête sur config
    if (config){
        return config;
    }
    const data = await getJson("configuration");
    return data;
}

const fetchSimilars = async (showTvId) => {
    try{
        const endPoint = `tv/${showTvId}/similar`; 
        const similars = await getJson(endPoint);
        return similars;

    }catch(err){
        console.error("ErrorHandler on similars",err);
    }
}

const fetchSringSearch = async (string) => {
    try {
        const endpoint = "srch/tv?query=" + string;
        const foundTvShow = await getJson(endpoint);
        return foundTvShow.results;
        
    } catch (error) {
        
    }
}

export {
    fetchPopulars,
    fetchConfig,
    fetchSimilars,
    fetchSringSearch,
}

// export default class TvShowApi {
//     static config = null;
//     static async fetchConfig(){
//         // Cache du config pour limiter les requêtes si déjà faite
//         if(TvShowApi.config){
//             return TvShowApi.config;
//         }
//         try{
//             const result = await fetch(`${BASE_URL}configuration`, OPTIONS);
//             const data = await result.json();
//             console.log("config ",data)
//             return data;
//         }catch (err){
//             console.error(err);
//         }
//     }
    
//     static async fetchPopulars() {
//         try{
//             const result = await fetch(`${BASE_URL}tv/popular?language=fr-FR`, OPTIONS);
//             const data = await result.json();
//             console.log("populars ",data)
//             return data.results;
//         }catch (err){
//             console.error(err);
//         }
//     }
// }