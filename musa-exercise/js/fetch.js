import { BASE_URL, MOVIE_GENRES, API_KEY, LANGUAGE_URL, PAGE_NUMBER_URL,MOVIE_TOPRATED,  END_POINT_SEARCH, MOVIE_POPULAR} from "./environments.js";
import {createMoviesGenres} from './utilities.js';
import {setFilmFragForReset, setFilmFragForSearch} from './renderMovies.js'
import {createFiltersList} from './forms.js';
// import {movieegenres,filmTopRated, nextMovies} from "./app.js";


/* global variables used in different fetches */
export let genresCat = {}; 
export let movieegenres = []; 
export let filmTopRated = []; 
export let nextMovies = []; 
export let totPages = [];
export let searchMovies = [];
export let filmPopular = [];


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
            createFiltersList(genresCat);
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
            setFilmFragForSearch(films);            
    }).catch(error => console.log(error));
}

   


export function fetchPopularMovie() {
    fetch(BASE_URL + MOVIE_POPULAR + API_KEY + LANGUAGE_URL + PAGE_NUMBER_URL).then(
        async (popular) => {
            let movies = await popular.json();
            let {results: films} = movies;
            filmPopular = films;
            setFilmFragForSearch(filmPopular);
        }
    )
}



/* next movies fetch */
export function fetchMoreMovies(baseUrl, count) {
    fetch(baseUrl + (PAGE_NUMBER_URL + count) ).then(
        async (movies) => {
            let moreMovies = await movies.json(); 
            console.log(moreMovies); 

            totPages = moreMovies.page;

            let {results: films} = moreMovies;
            nextMovies = films;
            console.log('next movies',nextMovies)
        }
    )
}

