import {setFilmFragForSearch, setFilmFragForReset} from "./renderMovies.js";
import {filmTopRated} from "./fetch.js";
import {form, genres_filter} from "./app.js";

/* reset movies list */
export function resetForm(){
    setFilmFragForReset(filmTopRated);
    console.log('reset form', filmTopRated) 
}

export function createFiltersList(filmsGenres) {
    // const genre = film.genres_id.map((idCat) => genresCat[idCat]);
        const wrapper = new DocumentFragment();
        const arrGenres = Object.entries(filmsGenres);
        
    for (let [id,genre] of arrGenres) {
        const div = document.createElement('div');
        div.classList.add('checkbox-genres');
        div.innerHTML = `
        <input id="genre-${id}" class="checkbox-genre" type="checkbox" name="${genre}" value="${id}" onchange="">
        <label for="genre-${id}">${genre}</label> <br>`;

        
        wrapper.appendChild(div);        
    }    
    genres_filter.appendChild(wrapper);
}

