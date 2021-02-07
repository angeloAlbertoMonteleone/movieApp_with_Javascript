"use strict";

function setFilm2(films) {
    
            for(const film of films) {
                const filmCard = document.createElement("div");
                filmCard.classList.add('film-card');

                const filmImgContainer = document.createElement("div");
                filmImgContainer.classList.add('film-card__img');

                const filmImg = document.createElement("img");
                filmImg.id = 'pricipale';
                filmImg.src = `${IMAGE_BASE_URL+ film.poster_path}`;
                filmImg.classList.add('img-grande');

                const descDiv = document.createElement("div");
                descDiv.classList.add("film-card__description");

                const h5 = document.createElement("h5");
                h5.textContent = film.title;
                const p = document.createElement("p");
                p.textContent = film.overview;

                descDiv.appendChild(h5);
                descDiv.appendChild(p);

                filmImgContainer.appendChild(filmImg);
                filmCard.appendChild(filmImgContainer);
                filmCard.appendChild(descDiv);

                body.appendChild(filmCard);
            }
}