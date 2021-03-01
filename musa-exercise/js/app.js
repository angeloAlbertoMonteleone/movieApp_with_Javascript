{'use strict'};

import {movieGenresFetch, moviesTopratedFetch, fetchMoreMovies, totPages, filmTopRated, movieegenres} from './fetch.js'
import { hamburgerMenuMovies, closeHamburgerMenu, openFilterMenu, closeFilters, loadMoreMovie, moviesFilter, createNewMovie} from "./utilities.js";
import {resetForm} from "./forms.js";



export let count = 0;

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

export const filtersForm = document.querySelector('#form');
filtersForm.onsubmit = (element) => {
    moviesFilter(element.currentTarget);
    moreMoviesButton.style.display="none";
    return false;
}

/* reset Movies and filters */
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click',() => {
    resetForm();
    moreMoviesButton.style.display="block";
});

/* open filters */
const openFiltersButton = document.querySelector('#filters');
openFiltersButton.addEventListener('click', openFilterMenu);

/* close filters */
export const closeFiltersButton = document.querySelector('#close-filters');
closeFiltersButton.addEventListener('click', closeFilters);

/* button for more movies */
let moreMoviesButton = document.querySelector('#moreMovies');
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
    completeMovieList();
}

export const liHam = document.querySelector('li');

export const form = document.getElementById('filter-form');
form.addEventListener('submit', (el) => {
    el.preventDefault();
    let arrSelectedGenres = [];
    let arrName = [];
    let arrGenre = [];
    const checkbox_genre = document.querySelectorAll('.checkbox-genre');
    // retrieve the selected genre list  
    for (const genreElm of checkbox_genre) {
        // console.log(genreElm.name,genreElm.value ,genreElm.checked);
        if(genreElm.checked) {
            console.log(genreElm.value);
            const genre = genreElm.value;
            const selected = filmTopRated.filter((movie) => movie.id.includes(genre))
            console.log(selected);
        }
    }
    

     
    // filter movies with selected genres
    
    // filter movies by name

    // filter movies by genre
})
// const filterForm = document.querySelector('#filter-form');
// filterForm.addEventListener('action', moviesGenresFilter);