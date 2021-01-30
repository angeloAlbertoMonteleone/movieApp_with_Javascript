
const BASE_URL4 = 'https://api.themoviedb.org/3';
const LATEST_MOVIE = '/movie/upcoming';
const API_KEY4 = '?api_key=ebe0a7b19063d864de232de72766c4ee';
const LANGUAGE_URL4 = '&language=en-US&page=1'; 
const URL4 = BASE_URL4 + LATEST_MOVIE + API_KEY4 + LANGUAGE_URL4;
const IMAGE_BASE_URL4 = "https://image.tmdb.org/t/p/w300";

fetch(URL4).then(
    async (latestMovie) => {
        let lastMovie = await latestMovie.json();
        console.log(lastMovie);
        if(lastMovie.status_code) {
            const error4 = getError(lastMovie.status_code);
            return error4;
        }
        const {results: films} = lastMovie;
        console.log(films);

        let moviesList = '';
        for(let value of films) {
            moviesList +=
            `<div class="completeCard ml-2 mr-2">
                <div class="card">
                <img src='${IMAGE_BASE_URL4 + value.poster_path}' class="card-img-top" alt="">
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
        console.log(`cards4` + moviesList);
        const movie = document.querySelector('.movie4');
        movie.innerHTML = moviesList; 

    
}).catch(errorEvent => console.log(errorEvent));


