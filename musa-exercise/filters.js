{'use strict'};


function createFiltersList(films) {

    // const genre = film.genres_id.map((idCat) => genresCat[idCat]);
    
        let movie = " ";
        
    for (let film of films) {
        movie += `
        <input id="checkbox" type="checkbox" name="${genresCat[film.genre_ids[0]]}" value="${genresCat[film.genre_ids[0]]}" onchange="moviesGenresFilter(this)">
        <label for="${genresCat[film.genre_ids[0]]}">${genresCat[film.genre_ids[0]]}</label><br>`;
        
        form.innerHTML = movie;        
    }    
}

