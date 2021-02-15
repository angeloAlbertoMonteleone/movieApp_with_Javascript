
/* inserimento film HTML */
function setFilms(films) {
    let htmlFilmsList = '';
            for(const film of films) {
                htmlFilmsList += `
                  <div class="film-card">
                    <div class="film-card__img">
                        <img
                            id="principale"
                            class="img-grande"
                            src="${IMAGE_BASE_URL + film.poster_path}"
                            alt=""
                            data-pippo="principale"/>
                    </div>        
                    <div class="film-card__description">
                        <h5>${film.title}</h5>
                        <p>${film.overview}</p>
                    </div>
                   </div>`
            }
            console.log('film card',htmlFilmsList);
            const wrapper = document.querySelector('.wrapper');
            wrapper.innerHTML = htmlFilmsList;
}
 