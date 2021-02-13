{'use strict'};

function getCatHamburgerMenu(films) {
    let movie = ' ';

    for (const film of films) {
        movie += `
        <li id="movie"><a hred="">${genresCat[film.genre_ids[0]]}</a></li>
        `
        
        ul.innerHTML = movie;
    }
    hamburgerMenu.appendChild(ul);
}