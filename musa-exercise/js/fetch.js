import { BASE_URL, MOVIE_GENRES, API_KEY, LANGUAGE_URL, PAGE_NUMBER_URL,MOVIE_TOPRATED } from "./environments.js";
import {createMoviesGenres} from './utilities.js';
import {setFilmFrag} from './renderMovies.js'
import {count} from './app.js';
// import {movieegenres,filmTopRated, nextMovies} from "./app.js";


/* global variables used in different fetches */
export let genresCat = {}; 
export let movieegenres = []; 
export let filmTopRated = []; 
export let nextMovies = []; 
export let totPages = [];

/* second fetch called before the movies list */
export function movieGenresFetch() {
    return fetch(BASE_URL + MOVIE_GENRES + API_KEY + LANGUAGE_URL + PAGE_NUMBER_URL).then(
        async (genresM) => {
            let moviesGenres = await genresM.json();
            console.log('genres root',moviesGenres.genres);
            movieegenres = moviesGenres.genres;
            console.log('genresMovie', movieegenres)

            genresCat = createMoviesGenres(moviesGenres.genres);
            console.log('dictionary of genres(genresCat):', genresCat);
            
            }).catch(err => console.log(err));
}

/* first fetch */
export function moviesTopratedFetch() {
    return fetch(BASE_URL + MOVIE_TOPRATED + API_KEY + LANGUAGE_URL + PAGE_NUMBER_URL).then(
        async (topRated) => {
            let movies = await topRated.json();
            console.log('films root',movies);
            // if(movies.status_code) {
            //     const alert_message = getError(movies.status_code);
            //     return alert_message;
            //     }
            
            let {results: films} = movies;
            filmTopRated = films;

            console.log('films extracted from root',films);
            console.log('films filmTopRated:', filmTopRated);
            // const actionFilms = getActionMovies(films);
            // console.log(actionFilms);
            setFilmFrag(films);            
    }).catch(error => console.log(error));
}


 /* next movies fetch */
 export function fetchMoreMovies() {
    fetch(BASE_URL + MOVIE_TOPRATED + API_KEY + LANGUAGE_URL + (PAGE_NUMBER_URL + count) ).then(
        async (topRated) => {
            let topRated2 = await topRated.json(); 
            console.log(topRated2); 
            
            totPages = topRated2.page;
            console.log(totPages);

            let {results: films} = topRated2;
            nextMovies = films;
            console.log('next movies',nextMovies)
        }
    )
}
    

