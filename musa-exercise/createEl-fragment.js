{'use strict'};

function setFilmFrag(films) {
    const containerFrag = new DocumentFragment();
    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');

        // let genre = genres.find((value) => value.id == film.genre_ids[0]); 
        
        movie.innerHTML = `
        <div class="card" data-isInvisible="${!film.overview ? false : true}">
            <div class="cover">
                <img class="image" 
                src="${IMAGE_BASE_URL + film.poster_path}" />
            </div>
            <div class="info">
                <h1 class="title">${film.title}</h1>
                <h3 class="description">${film.overview}</h3>
                <h5 class="list">${genresCat[film.genre_ids[0]]}</h5>
            </div>
        </div>
        `;
        
        containerFrag.appendChild(movie);
    }

    wrapper.appendChild(containerFrag);  
}