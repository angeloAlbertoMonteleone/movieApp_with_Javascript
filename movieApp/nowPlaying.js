
const BASE_URL2 = 'https://api.themoviedb.org/3';
const MOVIE_NOWPLAYING = '/movie/now_playing';
const API_KEY2 = '?api_key=ebe0a7b19063d864de232de72766c4ee';
const LANGUAGE_URL2 = '&language=en-US&page=1'; 
const URL2 = BASE_URL2 + MOVIE_NOWPLAYING + API_KEY2 + LANGUAGE_URL2;
const IMAGE_BASE_URL2 = "https://image.tmdb.org/t/p/w300";

fetch(URL2).then(
    async (nowPlaying) => {
        let movieNowPlaying = await nowPlaying.json();
        console.log(movieNowPlaying);
        if(movieNowPlaying.status_code) {
            let mainError = getError(movieNowPlaying.status_code);
            return mainError; 
        }
        const {results: films} = movieNowPlaying;
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
        const movie = document.querySelector('.movies2');
        movie.innerHTML = moviesList; 

       }
).catch(error => console.log(error));