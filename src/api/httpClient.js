import {BASE_URL,OPTIONS} from "../config";

export default async function getJson(endPoint){
    try{
        const result = await fetch(`${BASE_URL}${endPoint}`, OPTIONS);
        if(!result.ok){
            throw new Error("Erreur Http");
        }
        const data = await result.json();
        return data;
    }catch(err){
        console.error("Error Handler :: ",err);
    }

}