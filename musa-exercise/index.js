{'use strict'};

/* create a new folder [name it as you like] with 3 html css and js files
1. recover the api from the movie db (https://developers.themoviedb.org/3/movies/get-top-rated-movies) and print the list of recovered films on the console
2. manage an error from the API, for example putting a wrong API key and displaying the error on the screen
3. from the list retrieved, first select two films and show them on the screen showing the cover, title (title) and description (overview)
4. set a timer that after 3 seconds recovers one of the two films selected before and makes it disappear, and after another 3 seconds makes it visible again
  */

const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_GENRE = '/movie/top_rated';
const API_KEY = '?api_key=ebe0a7b19063d864de232de72766c4ee';
const LANGUAGE_URL = '&language=it-it&page=1'; 
const URL = BASE_URL + MOVIE_GENRE + API_KEY + LANGUAGE_URL;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');


fetch(URL).then(
    async (topRated) => {
        const movies = await topRated.json();
        console.log(movies);
        if(movies.status_code) {
            const alert_message = getError(movies.status_code);
            return alert_message;
            }
        
        const {results: films} = movies;
        const actionFilms = getActionMovies(films);
        console.log(actionFilms);
        setFilmsEvent(films);
        

        // const filterTwo = getTwo(films);
        //     console.log(filterTwo);

            // const firsMovie = {
            //     title: filterTwo[0].title,
            //     overview : filterTwo[0].overview,
            //     poster : filterTwo[0].poster_path
            // }
            // const secondMovie = {
            //     title: filterTwo[1].title,
            //     overview : filterTwo[1].overview,
            //     poster : filterTwo[1].poster_path
            // }

            // const firsTimeOut = setTimeout(() => {
            //     document.getElementById('title1').innerHTML = firsMovie.title;
            //     document.getElementById('par1').innerText = firsMovie.overview;
            //     const img = document.getElementById('img1');
            //     img.src = IMAGE_BASE_URL + firsMovie.poster;
            // }, 3000);


            // const secondTimeOut = setTimeout(() => {
            //     document.getElementById('title2').innerHTML = secondMovie.title;
            //     document.getElementById('par2').innerText = secondMovie.overview;
            //     const img2 = document.getElementById('img2');
            //     img2.src = IMAGE_BASE_URL + secondMovie.poster;
            //     document.querySelector('.movie1 .title1').style.display='none';
            //     document.querySelector('.movie1 .image1').style.display='none';
            // },6000);
    
                    // const poster = showPoster(filterTwo);
                    //     console.log(`Movie poster`, poster);
        // }
        }).catch(error => console.log(error));


function getError(code) {
    if(code === 7) {
        alert("You must enter a valid API Key");
    }else {
        alert("Generic error");
    }
}
    
function getTwo(movies) {
    return movies.filter(movie => movie.vote_average >= 8.9)       
//     movies.filter((value,index,array) => console.log())
}

function getActionMovies(movies) {
    return movies.filter((film) => film.genre_ids.find((id) => id == 18));
}