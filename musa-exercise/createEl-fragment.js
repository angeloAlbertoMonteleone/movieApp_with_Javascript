
function setFilmFrag(films) {
    const container = new DocumentFragment();
    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');

        movie.innerHTML = `
        <div class="card" data-isInvisible="${!film.overview ? false : true}">
            <div class="cover">
                <img class="image" 
                src="${IMAGE_BASE_URL + film.poster_path}" />
            </div>
            <div class="info">
                <h1 class="title">${film.title}</h1>
                <h3 class="description">${film.overview}</h3>
                <h5 class="list">${film.genre_ids}</h5>
            </div>
        </div>
        `;
        
        container.appendChild(movie);
    }
    wrapper.appendChild(container);  
    body.appendChild(wrapper);
}