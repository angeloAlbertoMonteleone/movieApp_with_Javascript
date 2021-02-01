
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_GENRE = '/movie/top_rated';
const API_KEY = '?api_key=ebe0a7b19063d864de232de72766c4ee';
const LANGUAGE_URL = '&language=en-US&page=1'; 
const URL = BASE_URL + MOVIE_GENRE + API_KEY + LANGUAGE_URL;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

fetch(URL).then(
    async (popularMovie) => {
        let movies = await popularMovie.json();
        console.log(movies);
        if(movies.status_code) {
            const error = getError(movies.status_code);
            return error;
        }
        const {results : films} = movies;
        console.log(films);

        let moviesList = '';
        for(let value of films) {
            moviesList +=
            `<div class="completeCard ml-2 mr-2">
                <div class="card">
                <img src='${IMAGE_BASE_URL + value.poster_path}' class="card-img-top" alt="">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12" id="title">
                            <h5 class="card-title">${value.title}</h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>`
        }
        console.log(`cards` + moviesList);
        const movie = document.querySelector('.movies');
        movie.innerHTML = moviesList; 

    }
).catch(errorEvent => console.log(errorEvent));


