import {setFilmFragForSearch,  getCatHamburgerMenu, setFilmFragForMore} from './renderMovies.js';
import {nextMovies, movieegenres, filmTopRated, totPages, genresCat} from './fetch.js'
import {checkbox, hamburgerMenu,  wrapper, inputValue} from './app.js'
import {END_POINT_SEARCH } from "./environments.js";
import { createFiltersList } from "./forms.js";

export let searchMovies = [];

/* convert movies genres id to name */
export let createMoviesGenres = (arrCat) => 
    arrCat.reduce((obj, catObj) => {
        obj[catObj.id] = catObj.name;
        return obj; 
    }, {});


/* how to search and make appearing movies */
export function moviesFilter(search, filmTopRated){
    if(!search) return filmTopRated;
    const searchElement = search;
    const movieValue = filmTopRated.filter(film => film.title.toLowerCase().includes(searchElement.toLowerCase())); //check if title includes search value in input
    console.log('movie from search: ', movieValue);
    return movieValue;
    // const newUrl = END_POINT_SEARCH + '&query=' + searchElement;
    // fetch(newUrl).then((res) => res.json())
    //     .then((data) => {
    //         console.log('data: ',data)
    //         
    //         searchMovies.push(data.results);
    //         console.log(searchMovies);  
    //         })
    //     .catch((err) => {
    //         console.log('error',err)
    //         });
    //         inputValue.value = '';
    // console.log(searchElement);
    
    
}


export function moviesFilterGenres(checkbox_genre, filmTopRated){
let checkedMovies = [];

for (const genre of checkbox_genre) {
    if(genre.checked) {
        checkedMovies = [...checkedMovies, genre]
    }
}

if (checkedMovies.length == 0) return filmTopRated;
// retrieve the selected genre list  

const filteredMovies = filmTopRated.filter(film => {
    let genreContained = false;
    for (const checked of checkedMovies) {
        genreContained = film.genre_ids.includes(+checked.value);
        if(!genreContained) {
            break;
        }
    } 
    return genreContained;
})
return filteredMovies;
}




export function createNewMovie(e) {
    const createTitle = e.title.value;
    const createDescr = e.description.value;
    const createCat = e.category.value;
    
    
    const newFilm = {
        adult: false,
        backdrop_path: "",
        genre_ids: [createCat],
        id: 0,
        original_language: "en",
        original_title: "",
        overview: createDescr,
        popularity: 0,
        poster_path: "0",
        release_date: "",
        title: createTitle,
        video: false,
        vote_average: 0,
        vote_count: 0
    }
    // searchMovies.push(newFilm);
    filmTopRated.push(newFilm);
    // setFilmFragForMore(filmTopRated);
    console.log(filmTopRated);
}



/* open categories filter menu */
export function openFilterMenu() {
    createFiltersList(genresCat);
    checkbox.style.display = "block";
    closeFiltersButton.style.display="inline";
}

/* close categories filter menu */
export function closeFilters() {
    checkbox.style.display="none";
}

/*  */
export function moviesGenresFilter() {
    console.log(movieValue)
    setFilmFragForSearch(movieValue)
    console.log('ciao');
    console.log(genres)
}

/* how open and close hamburger menu - calling hamburgerMenu.js*/
export function hamburgerMenuMovies() {
    getCatHamburgerMenu(movieegenres);
    console.log(movieegenres)
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
    setFilmFragForMore(nextMovies)
}

export function loadMovieCat() {
    const filteredCat = films.filter((movie) => movie);
    console.log(filteredCat);
}


/* function to filter movies category*/


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
