{'use strict'};

function getCatHamburgerMenu(films) {
    let movie = ' ';

    for (const film of films) {
        movie += `
        <li onclick="">${film.name}</li>
        `
        
        hamburgerMenu.innerHTML = movie;
    }

}

