
const BASE_URL3 = 'https://api.themoviedb.org/3';
const MOVIE_TRAILERS = '/movie/{movie_id}/videos';
const API_KEY3 = '?api_key=ebe0a7b19063d864de232de72766c4ee';
const LANGUAGE_URL3 = '&language=en-US&page=1'; 
const URL3 = BASE_URL3 + MOVIE_TRAILERS + API_KEY3 + LANGUAGE_URL3;
const IMAGE_BASE_URL3 = "https://image.tmdb.org/t/p/w300";

fetch(URL3).then(
    async (MovieTrailer) => {
        let moviesTr = await MovieTrailer.json();
        console.log(moviesTr);
        if(moviesTr.status_code) {
            const error3 = getError(moviesTr.status_code);
            return error3;
        }
        const {results : films} = moviesTr;
        console.log(films);

        let moviesList = '';
        for(let value of films) {
            moviesList +=
            `<div class="completeCard ml-2 mr-2">
                <div class="card">
                <img src='' class="card-img-top" alt="">
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
        const movie = document.querySelector('.trailers');
        movie.innerHTML = moviesList; 

    
}).catch(errorEvent => console.log(errorEvent));


