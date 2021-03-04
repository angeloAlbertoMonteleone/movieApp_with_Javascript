import { wrapper, hamburgerMenu, form} from './app.js';
import {genresCat, nextMovies} from './fetch.js'
import {IMAGE_BASE_URL} from "./environments.js";
import {loadMovieCat} from "./utilities.js";


/* function for searching movie list */
export function setFilmFragForSearch(films) {
    const containerFrag = new DocumentFragment();
    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');
        
        function changeIdSpan(id) {
            let color = " ";
            switch(id) {
                case 12:
                case 14:
                case 37:
                case 53:
                case 80:
                case 10752:
                    color = 'red';
                    break;
                case 16:
                case 18:
                case 99:
                case 878:
                    color = 'pink';
                    break;
                case 27:
                case 28:
                case 9648:
                case 10402:
                    color = 'green';
                    break;
                case 35:
                case 36:
                case 10749:
                case 10751:
                case 10770:
                    color = 'yellow';
                    break;
            }
            return color;
        }

        movie.innerHTML = `
        <div class="card" data-isInvisible="${!film.overview ? false : true}">
            
            <div class="cover">                    
                <img class="image" 
                src="${IMAGE_BASE_URL + film.poster_path}" />
            </div>

            <div class="descr">
                <h1 class="title">${film.title}</h1>
                <h4 class="description">${film.overview}</h4>
                <h5 class="list">${film.genre_ids.map((idCat) => `<span class="tag-genre tag-${changeIdSpan(idCat)}" id="${idCat}">${genresCat[idCat]}</span> `).join(' ')}</h5>
            </div>
            
        </div>
        `;

        containerFrag.appendChild(movie);
    }
    wrapper.innerHTML = " ";
    wrapper.appendChild(containerFrag);  
}




/* function for resetting movie list */
export function setFilmFragForReset(films, conf = {reset:true}) {
    const containerFrag = new DocumentFragment();

    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');
                
        function changeIdSpan(id) {
            let color = " ";
            switch(id) {
                case 12:
                case 14:
                case 37:
                case 53:
                case 80:
                case 10752:
                    color = 'red';
                    break;
                case 16:
                case 18:
                case 99:
                case 878:
                    color = 'pink';
                    break;
                case 27:
                case 28:
                case 9648:
                case 10402:
                    color = 'green';
                    break;
                case 35:
                case 36:
                case 10749:
                case 10751:
                case 10770:
                    color = 'yellow';
                    break;
            }
            return color;
        }
        
        movie.innerHTML = `
        <div class="card" data-isInvisible="${!film.overview ? false : true}">
                <div class="cover">                    
                <img class="image" 
                src="${IMAGE_BASE_URL + film.poster_path}" />
            </div>

            <div class="descr">
                <h1 class="title">${film.title}</h1>
                <h4 class="description">${film.overview}</h4>
                <h5 class="list">${film.genre_ids.map((idCat) => `<span class="tag-genre tag-${changeIdSpan(idCat)}" id="${idCat}">${genresCat[idCat]}</span> `).join(' ')}</h5>
            </div>
        </div>
        `;

        containerFrag.appendChild(movie);
    }
    if(conf.reset) wrapper.innerHTML = " ";
    wrapper.appendChild(containerFrag);  
}




/* function for loading more movies */
export function setFilmFragForMore(films) {
    const containerFrag = new DocumentFragment();
    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');
        
        function changeIdSpan(id) {
            let color = " ";
            switch(id) {
                case 12:
                case 14:
                case 37:
                case 53:
                case 80:
                case 10752:
                    color = 'red';
                    break;
                case 16:
                case 18:
                case 99:
                case 878:
                    color = 'pink';
                    break;
                case 27:
                case 28:
                case 9648:
                case 10402:
                    color = 'green';
                    break;
                case 35:
                case 36:
                case 10749:
                case 10751:
                case 10770:
                    color = 'yellow';
                    break;
            }
            return color;
        }
        
        if(film.poster_path) {
            movie.innerHTML = 
            `
        <div class="card" data-isInvisible="${!film.overview ? false : true}">
                <div class="cover">                    
                <img class="image" 
                src="${IMAGE_BASE_URL + film.poster_path}" />
            </div>

            <div class="descr">
                <h1 class="title">${film.title}</h1>
                <h4 class="description">${film.overview}</h4>
                <h5 class="list">${film.genre_ids.map((idCat) => `<span class="tag-genre tag-${changeIdSpan(idCat)}" id="${idCat}">${genresCat[idCat]}</span> `).join(' ')}</h5>
            </div>
        </div>
        `;
        } 
        containerFrag.appendChild(movie);
    }
    wrapper.appendChild(containerFrag);  
}






/* example of inner function */
export function setFilmsEvent(films) {
    const container = new DocumentFragment();
    
    for(let film of films) {
        const movie = document.createElement('div');
        movie.classList.add('film-card');
        movie.id = film.id;
        // movie.onclick = (e) => {
        //     console.log('events a video: ',e); //how to check onclick event 
        //                                        // event.stopPropagation(), stops others onClick under the current one
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



export function getCatHamburgerMenu(films) {
    let movie = ' ';
    for (const film of films) {
        
        movie += `
        <li onclick="" id="${film.id}">${film.name}</li>
        `
        hamburgerMenu.innerHTML = movie;
    }

}

