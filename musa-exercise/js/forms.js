import {setFilmFrag, setFilmFragReset} from "./renderMovies.js";
import {filmTopRated} from "./fetch.js";

/* reset movies list */
export function resetForm(){
    setFilmFragReset(filmTopRated);
    console.log('reset form', filmTopRated) 
}
