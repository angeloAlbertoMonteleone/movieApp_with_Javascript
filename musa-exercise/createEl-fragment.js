{'use strict'};

function setFilmFrag(films) {
    const containerFrag = new DocumentFragment();
    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');
        
        function changeIdSpan() {
            for(let value of film.genre_ids) {
                if(value == 10749) {
                    return 'red';
            } if(value === 35) {
                return 'green'
            }
            }
        }

        const genreTag = film.genre_ids.map((idCat) => `<span id="${changeIdSpan()}">${genresCat[idCat]}</span> `);

        let genreWithoutComma = " ";
        genreTag.forEach((element) => {
                genreWithoutComma+= element + " "
            }
        );

        movie.innerHTML = `
        <div class="card" data-isInvisible="${!film.overview ? false : true}">
            <h1 class="title">${film.title}</h1>    
            <div class="cover">                    
                <img class="image" 
                src="${IMAGE_BASE_URL + film.poster_path}" />
                <h4 class="description">${film.overview}</h4>
                <h5 class="list">${genreWithoutComma}</h5>
            </div>
        </div>
        `;
        
        containerFrag.appendChild(movie);
    }
    wrapper.innerHTML = " ";
    wrapper.appendChild(containerFrag);  
}