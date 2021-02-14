{'use strict'};

/* create a new folder [name it as you like] with 3 html css and js files
1. recover the api from the movie db (https://developers.themoviedb.org/3/movies/get-top-rated-movies) and print the list of recovered films on the console
2. manage an error from the API, for example putting a wrong API key and displaying the error on the screen
3. from the list retrieved, first select two films and show them on the screen showing the cover, title (title) and description (overview)
4. set a timer that after 3 seconds recovers one of the two films selected before and makes it disappear, and after another 3 seconds makes it visible again
  */

const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_TOPRATED = '/movie/top_rated';
const MOVIE_GENRES = '/genre/movie/list';
const API_KEY = '?api_key=ebe0a7b19063d864de232de72766c4ee';
const LANGUAGE_URL = '&language=en-US&page=';
const PAGE_NUMBER_URL = '1'; 
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const main = document.querySelector('main');
const form = document.getElementById('filter-form');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const ul = document.querySelector('.ul-ham');
const hamMovie = document.querySelector('#ham-movie');
const loadMoviesButton = document.querySelector('#loadMovies');

let genresCat = {};
let movieegenres = [];
let filmTopRated = [];


// async function controller() {
//     await movieGenresFetch();
//     await moviesTopratedFetch();
// }
// controller();

movieGenresFetch().then(() => moviesTopratedFetch());


/* second fetch */
function movieGenresFetch() {
    return fetch(BASE_URL + MOVIE_GENRES + API_KEY + LANGUAGE_URL + PAGE_NUMBER_URL).then(
        async (genresM) => {
            const moviesGenres = await genresM.json();
            console.log('genres root',moviesGenres.genres);
            movieegenres = moviesGenres.genres;
            console.log('genresMovie', movieegenres)
            let valueGen = '';
            for(let value of movieegenres) {
                valueGen += value;
            }

            genresCat = createMoviesGenres(moviesGenres.genres);
            console.log('dictionary of genres(genresCat):', genresCat);
            
            }).catch(err => console.log(err));
}

/* first fetch */
function moviesTopratedFetch() {
    return fetch(BASE_URL + MOVIE_TOPRATED + API_KEY + LANGUAGE_URL + PAGE_NUMBER_URL).then(
        async (topRated) => {
            const movies = await topRated.json();
            console.log('films root',movies);
            // if(movies.status_code) {
            //     const alert_message = getError(movies.status_code);
            //     return alert_message;
            //     }
            
            const {results: films} = movies;
            filmTopRated = films;

            console.log('films extracted from root',films);
            console.log('films filmTopRated:', filmTopRated);
            // const actionFilms = getActionMovies(films);
            // console.log(actionFilms);
            setFilmFrag(films);            
    }).catch(error => console.log(error));
}


// function getError(code) {
//     if(code === 7) {
//         alert("You must enter a valid API Key");
//     }else {
//         alert("Generic error");
//     }
// }
    
/* convert movies genres id to name */
let createMoviesGenres = (arrCat) => 
    arrCat.reduce((obj, catObj) => {
        obj[catObj.id] = catObj.name;
        return obj; 
    }, {});


/* how to search and make appearing movies */
function moviesFilter(e){
    const searchElement = e.search.value;
    const movieValue = filmTopRated.filter(film => film.title.toLowerCase().includes(searchElement.toLowerCase())); //check if title includes search value in input
    console.log('input search: ', e.search.value);
    console.log('movie from search: ', movieValue);
    setFilmFrag(movieValue); 
}

/* reset movies list */
function resetForm(){
    setFilmFrag(filmTopRated);
    console.log('reset form') 
}

/* open categories filter menu */
function openFilterMenu() {
    createFiltersList(movieegenres);
    document.getElementById('close-filters').style.display="inline";
    document.getElementById("divCheckbox").style.display = "block";
}

/* close categories filter menu */
function closeFilters() {
    document.getElementById("divCheckbox").style.display = "none";
    document.getElementById('close-filters').style.display="none";
}

/*  */
function moviesGenresFilter() {
    console.log(movieValue)
    setFilmFrag(movieValue)
    console.log('ciao');
    console.log(genres)
}

/* how open and close hamburger menu - calling hamburgerMenu.js*/
function hamburgerMenuMovies() {
    getCatHamburgerMenu(movieegenres);
    if(hamburgerMenu.style.display === 'block') {
        hamburgerMenu.style.display = 'none';

    } else {
        hamburgerMenu.style.display = 'block';
    }
}

/* closing hamburger menu by clicking somewhere else  */
function closeHamburgerMenu(){
    if(hamburgerMenu.style.display === 'block') {
        hamburgerMenu.style.display = 'none';
    }
}














// function getActionMovies(movies) {
//     return movies.filter((film) => film.genre_ids.find((id) => id == 18));
// }

// function getTwo(movies) {
//     return movies.filter(movie => movie.vote_average >= 8.9)       
// //     movies.filter((value,index,array) => console.log())
// }
