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
const LANGUAGE_URL = '&language=en-US&page=1'; 
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const main = document.querySelector('main');


let genresCat = {};
let genres = [];
let filmTopRated = [];

// async function controller() {
//     await movieGenresFetch();
//     await moviesTopratedFetch();
// }
// controller();

movieGenresFetch().then(() => moviesTopratedFetch());


/* second fetch */
function movieGenresFetch() {
    return fetch(BASE_URL + MOVIE_GENRES + API_KEY + LANGUAGE_URL).then(
        async (genres) => {
            const moviesGenres = await genres.json();
            console.log('genres root',moviesGenres);

            genresCat = createMoviesGenres(moviesGenres.genres);
            genres = moviesGenres.genres;
            console.log('dictionary of genres:', genresCat);
    
            }).catch(err => console.log(err));
    
}

/* first fetch */
function moviesTopratedFetch() {
    return fetch(BASE_URL + MOVIE_TOPRATED + API_KEY + LANGUAGE_URL).then(
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
    

let createMoviesGenres = (arrCat) => 
    arrCat.reduce((obj, catObj) => {
        obj[catObj.id] = catObj.name;
        return obj; 
    }, {});


function moviesFilter(e){
    const searchElement = e.search.value;
    const movieValue = filmTopRated.filter(film => film.title.toLowerCase().includes(searchElement.toLowerCase())); //check if title includes search value in input
    console.log('input search: ', e.search.value);
    console.log('movie from search: ', movieValue);
    setFilmFrag(movieValue); 
}

function resetForm(){
    setFilmFrag(filmTopRated);
    console.log('reset form') 
}

// function getActionMovies(movies) {
//     return movies.filter((film) => film.genre_ids.find((id) => id == 18));
// }


// function getTwo(movies) {
//     return movies.filter(movie => movie.vote_average >= 8.9)       
// //     movies.filter((value,index,array) => console.log())
// }
