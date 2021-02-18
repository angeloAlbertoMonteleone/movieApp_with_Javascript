import {setFilmFragForSearch, setFilmFragForReset} from "./renderMovies.js";
import {filmTopRated} from "./fetch.js";

/* reset movies list */
export function resetForm(){
    setFilmFragForReset(filmTopRated);
    console.log('reset form', filmTopRated) 
}
