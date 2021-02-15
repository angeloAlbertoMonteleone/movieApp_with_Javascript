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





function createFiltersList(films) {
    // const genre = film.genres_id.map((idCat) => genresCat[idCat]);

        let movie = " ";
        
    for (let film of films) {
        movie += `
        <input id="checkbox" type="checkbox" name="${film.name}" value="${film.name}" onchange="moviesGenresFilter()">
        <label for="${film.name}">${film.name}</label><br>`;

        
        form.innerHTML = movie;        
    }    
}



function getCatHamburgerMenu(films) {
    let movie = ' ';

    for (const film of films) {
        movie += `
        <li onclick="">${film.name}</li>
        `
        
        hamburgerMenu.innerHTML = movie;
    }

}

