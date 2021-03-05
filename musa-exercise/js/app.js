{'use strict'};

import {movieGenresFetch, moviesTopratedFetch, fetchMoreMovies, totPages, filmTopRated, movieegenres, fetchPopularMovie, filmPopular} from './fetch.js'
import { hamburgerMenuMovies, closeHamburgerMenu, loadMoreMovie, moviesFilter, createNewMovie, moviesFilterGenres} from "./utilities.js";
import {createFiltersList, resetForm} from "./forms.js";
import { setFilmFragForSearch } from './renderMovies.js';
import {BASE_URL_POPULAR, BASE_URL_TOPRATED} from './environments.js'


export let countTopRated = 0;
export let countPopular = 0;

const body = document.querySelector('body');
export const wrapper = document.querySelector('.wrapper');
const main = document.querySelector('main');
export const hamburgerMenu = document.querySelector('.hamburgerMenu');
const ul = document.querySelector('.ul-ham');
const hamMovie = document.querySelector('#ham-movie');
const loadMoviesButton = document.querySelector('#loadMovies');
export const checkbox = document.getElementById('divCheckbox');
export let inputValue = document.getElementById('search');
const titleForm = document.getElementById('title');
const descriptionForm = document.getElementById('description')
const categoryForm = document.getElementById('category')
export const filter_list = document.getElementById('filter-list')
export const genres_filter = document.querySelector('.genres-filter');
let showCat = document.querySelector('.showCat');
let opened_filter = false;


movieGenresFetch().then(() => moviesTopratedFetch());

/* open hamburger menu */
const hamButton = document.querySelector('#buttonHamburgerMenu');
hamButton.addEventListener('click', hamburgerMenuMovies);

/* close hamburger menu */
const container2 = document.querySelector('#container2');
container2.addEventListener('click',closeHamburgerMenu);


/* form to create new Movie*/
const formCreateNewMovie = document.querySelector('#createNewMovie');
formCreateNewMovie.onsubmit = (element) => {
    createNewMovie(element.currentTarget);
    return false;
}

// filtersForm.onsubmit = (element) => {
//     moviesFilter(element.currentTarget);
//     moreMoviesButton.style.display="none";
//     return false;
// }

/* reset Movies and filters */
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click',() => {
    resetForm();
    moreMoviesButton.style.display="block";
});




/* button for top Rated movies list*/
const buttonTopRated = document.querySelector('.buttonTopRated');
buttonTopRated.addEventListener('click', () => {
    moviesTopratedFetch();
})
/* button for Popular movies list */
const buttonPopular = document.querySelector('.buttonPopular');
buttonPopular.addEventListener('click', () => {
    fetchPopularMovie()
})



/* button for more movies */
let moreMoviesButton = document.querySelector('#moreMovies');
moreMoviesButton.onmouseover = () => {
    if(totPages == 500) {
        moreMoviesButton.style.display = "none";
    } else {
        if(filmPopular.length == 0) {
            countTopRated++;
            console.log('toprated',fetchMoreMovies(BASE_URL_TOPRATED, countTopRated));
        } 
        if(filmTopRated.length == 0) {
            countPopular++;
            resetForm([]);
          console.log('popular',fetchMoreMovies(BASE_URL_POPULAR, countPopular));
        }
        
    }
};

moreMoviesButton.onclick = () => {
        loadMoreMovie();
}



// export const liHam = document.querySelector('li');
showCat.addEventListener('click', () => {
    if(opened_filter) {
        showCat.textContent = "Show all categories";
        genres_filter.style.height = "7rem";   
        opened_filter = false;  
        return   
    }
    genres_filter.style.height = "23.5rem";
    showCat.textContent = "See less";
    opened_filter = true;
})



export const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkbox_genre = document.querySelectorAll('.checkbox-genre');
    const search = e.currentTarget.search.value;
    // filter movies with selected genres
    let searchedMovie;
    // filter movies by name
    searchedMovie = moviesFilter(search, filmTopRated);
    // filter movies by genre
    searchedMovie = moviesFilterGenres(checkbox_genre, searchedMovie);

    setFilmFragForSearch(searchedMovie)
})
// const filterForm = document.querySelector('#filter-form');
// filterForm.addEventListener('action', moviesGenresFilter);
