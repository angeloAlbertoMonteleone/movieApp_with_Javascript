import {setFilmFrag, createFiltersList, getCatHamburgerMenu} from './renderMovies.js';
import {nextMovies, movieegenres, filmTopRated} from './fetch.js'
import {checkbox, hamburgerMenu, closeFiltersButton, wrapper} from './app.js'




/* convert movies genres id to name */
export let createMoviesGenres = (arrCat) => 
    arrCat.reduce((obj, catObj) => {
        obj[catObj.id] = catObj.name;
        return obj; 
    }, {});


/* how to search and make appearing movies */
export function moviesFilter(e){
    const searchElement = e.search.value;
    const movieValue = filmTopRated.filter(film => film.title.toLowerCase().includes(searchElement.toLowerCase())); //check if title includes search value in input
    console.log('input search: ', e.search.value);
    console.log('movie from search: ', movieValue);
        setFilmFrag(movieValue);
}


/* open categories filter menu */
export function openFilterMenu() {
    createFiltersList(movieegenres);
    checkbox.style.display = "block";
    closeFiltersButton.style.display="inline";
}

/* close categories filter menu */
export function closeFilters() {
    checkbox.style.display = "none";
    closeFiltersButton.style.display="none";
}

/*  */
export function moviesGenresFilter() {
    console.log(movieValue)
    setFilmFrag(movieValue)
    console.log('ciao');
    console.log(genres)
}

/* how open and close hamburger menu - calling hamburgerMenu.js*/
export function hamburgerMenuMovies() {
    getCatHamburgerMenu(movieegenres);
    if(hamburgerMenu.style.display === 'block') {
        hamburgerMenu.style.display = 'none';

    } else {
        hamburgerMenu.style.display = 'block';
    }
}

/* closing hamburger menu by clicking somewhere else  */
export function closeHamburgerMenu(){
    if(hamburgerMenu.style.display === 'block') {
        hamburgerMenu.style.display = 'none';
    }
}


export function loadMoreMovie() {
    setFilmFrag(nextMovies)
}

// async function controller() {
//     await movieGenresFetch();
//     await moviesTopratedFetch();
// }
// controller();


// function getError(code) {
//     if(code === 7) {
//         alert("You must enter a valid API Key");
//     }else {
//         alert("Generic error");
//     }
// }


// function getActionMovies(movies) {
//     return movies.filter((film) => film.genre_ids.find((id) => id == 18));
// }

// function getTwo(movies) {
//     return movies.filter(movie => movie.vote_average >= 8.9)       
// //     movies.filter((value,index,array) => console.log())
// }
