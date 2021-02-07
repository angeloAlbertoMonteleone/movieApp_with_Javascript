// continuando dalla cartella creata la settimana scorsa:
// 1.	creare un div con classe ‘container’ dentro il body
// 2.	inserire dentro al div creato prima, la lista dei film che appartengono alla categoria Action (id:28) , ogni film dovra avere cover,titolo, descrizione e lista delle categoria a cui appartiene
// 3.	ogni film dovra avere un’attributo custom ‘data-isInvisible=true o false’ per identificare i film senza descrizione
// 4.	scrivere le regole css per fare in modo che tutti gli eleemnti con data-isInvisible=true non siano visibili a video

function actionMovie(films) {

    const container = document.createElement('div');
    container.classList.add('container');
    wrapper.appendChild(container);
    
    let movie = '';
    for(let film of films) {
        movie += `
        <div class="card">
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

        container.innerHTML = movie;
        const card = document.querySelector('.card');
        const descr = document.querySelector('.description');        
        if(descr == '') {
            card.setAttribute('data-isInvisible', 'true')
        } else {
            card.setAttribute('data-isInvisible', 'false')
        }
        
    }

    
    body.appendChild(wrapper);

}


