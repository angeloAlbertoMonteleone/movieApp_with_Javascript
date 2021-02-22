import {setFilmFragForSearch, setFilmFragForReset} from "./renderMovies.js";
import {filmTopRated} from "./fetch.js";
import { form } from "./app.js";

/* reset movies list */
export function resetForm(){
    setFilmFragForReset(filmTopRated);
    console.log('reset form', filmTopRated) 
}


export function createFiltersList(films) {
    // const genre = film.genres_id.map((idCat) => genresCat[idCat]);

        let movie = " ";
        
    for (let film of films) {
        movie += `
        <input id="checkbox" type="checkbox" name="${film.name}" value="${film.name}" onchange="moviesGenresFilter()">
        <label for="${film.name}">${film.name}</label><br>`;

        
        form.innerHTML = movie;        
    }    
}

