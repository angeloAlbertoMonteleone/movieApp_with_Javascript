{'use strict'};

/* creare una nuova cartella [chiamatela come volete] con 3 file html css e js
1.	recuperare l’api da the movie db (https://developers.themoviedb.org/3/movies/get-top-rated-movies)  e stampare a console la lista dei film recuperati
2.	gestire un’errore dall’api ad esempio mettere un’api sbagliata e visualizzare l’errore a video
3.	dalla lista recuperata prima selezionare due film e falli visualizzarli a video facendo vedere la copertina, titolo(title) e la descrizione (overview)   
4.	impostare un timer che dopo 3 sec recupera uno dei due film selezionati prima e lo faccia scomparire e dopo altri 3 sec sia visibile di nuovo  
 */
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_GENRE = '/movie/top_rated';
const API_KEY = '/api_key=ebe0a7b19063d864de232de72766c4ee';
const LANGUAGE_URL = '&language=en-US&page=1'; 
const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ebe0a7b19063d864de232de72766c4ee&language=en-US&page=1';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

fetch(URL).then(
    async (topRated) => {
        const movies = await topRated.json();
        console.log(movies);
        if(movies.status_code) {
            const alert_message = getError(movies.status_code);
            return alert_message;
            }
        
        const {results: films } = movies;

        const filterTwo = getTwo(films);
            console.log(filterTwo);

            const firsMovie=   {
                title: filterTwo[0].title,
                overview : filterTwo[0].overview,
                poster : filterTwo[0].poster_path
            }
            const secondMovie = {
                title: filterTwo[1].title,
                overview : filterTwo[1].overview,
                poster : filterTwo[1].poster_path
            }

            setTimeout(() => {
                firsMovie.title = document.getElementById('title1');
                firsMovie.overview = document.getElementById('par1')
                const img = document.getElementById('img1');
                img.src = IMAGE_BASE_URL + firsMovie.poster;
            },3000);
            
            setTimeout(() => {
                secondMovie.title = document.getElementById('title2');
                secondMovie.overview = document.getElementById('par2')
                const img = document.getElementById('img2');
                img.src = IMAGE_BASE_URL + secondMovie.poster;
            },3000);
    
                    // const poster = showPoster(filterTwo);
        //     console.log(`Movie poster`, poster);
        // }
        }).catch(error => console.log(error));


function getError(code) {
    if(code === 7) {
        alert("Devi inserire una chiave valida API");
    }else {
        alert("errore API generico");
    }
}
    
function getTwo(movies) {
    return movies.filter(movie => movie.vote_average >= 8.9)       
//     movies.filter((value,index,array) => console.log())
}


