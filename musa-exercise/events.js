{'use strict'};


function setFilmsEvent(films) {
    const container = new DocumentFragment();
    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');
        movie.id = film.id;
        // movie.onclick = (e) => {
        //     console.log('events a video: ',e); //how to check onclick event 
        //                                         // event.stopPropagation(), stops others onClick under the current one
        // } 

        movie.innerHTML = `
            <div class="cover"> 
                <img class="image" 
                src="${IMAGE_BASE_URL + film.poster_path}"
                onClick="console.log('immagine');event.stopPropagation()" /> 
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
    body.appendChild(container);
}

// const title = document.querySelector('.title');
//         title.addEventListener("click",(element, event) => {
//             console.log('event from click eventListener', element, event)
//         })
