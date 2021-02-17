{'use strict'};
import {movieGenresFetch, moviesTopratedFetch, fetchMoreMovies, totPages} from './fetch.js'
import { hamburgerMenuMovies, closeHamburgerMenu, openFilterMenu, closeFilters, loadMoreMovie, moviesFilter} from "./utilities.js";
import {resetForm} from "./forms.js";


export let count = 0;

const body = document.querySelector('body');
export const wrapper = document.querySelector('.wrapper');
const main = document.querySelector('main');
export const form = document.getElementById('filter-form');
export const hamburgerMenu = document.querySelector('.hamburgerMenu');
const ul = document.querySelector('.ul-ham');
const hamMovie = document.querySelector('#ham-movie');
const loadMoviesButton = document.querySelector('#loadMovies');
export const checkbox = document.getElementById('divCheckbox');



movieGenresFetch().then(() => moviesTopratedFetch());

/* open hamburger menu */
const hamButton = document.querySelector('#buttonHamburgerMenu');
hamButton.addEventListener('click', hamburgerMenuMovies);

/* close hamburger menu */
const container2 = document.querySelector('#container2');
container2.addEventListener('click',closeHamburgerMenu);


export const filtersForm = document.querySelector('#form');
filtersForm.onsubmit = (el) => {
    moviesFilter(el.currentTarget);
    return false;
}

/* reset Movies and filters */
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click',resetForm);

/* open filters */
const openFiltersButton = document.querySelector('#filters');
openFiltersButton.addEventListener('click', openFilterMenu);

/* close filters */
export const closeFiltersButton = document.querySelector('#close-filters');
closeFiltersButton.addEventListener('click', closeFilters);

/* button for more movies */
const moreMoviesButton = document.querySelector('#moreMovies');
moreMoviesButton.onmouseover = () => {
    if(totPages == 500) {
        moreMoviesButton.style.display = "none";
    } else {
        count++;
        fetchMoreMovies();
    }
};
moreMoviesButton.onclick = () => {
    loadMoreMovie();
}

// const filterForm = document.querySelector('#filter-form');
// filterForm.addEventListener('action', moviesGenresFilter);