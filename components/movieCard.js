import { navigateTo } from '../router.js';

const movieCard = (item) => {
    
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('movieCard');

    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movieImg');
    movieDiv.style.backgroundImage = `url('${item.thumbnail.regular.medium}')`;
    
    // Wrapper for the boomkark icon... for styling
    const bookmarkWrapper = document.createElement('div');
    bookmarkWrapper.classList.add('bookmarkImgWrapper');

    const bookmarkImg = document.createElement('img');
    bookmarkImg.src = item.isBookmarked 
        ? 'assets/icon-bookmark-full.svg' 
        : 'assets/icon-bookmark-empty.svg';
    bookmarkImg.alt = "bookmark";
    bookmarkImg.classList.add('bookmarkImg');

    bookmarkWrapper.appendChild(bookmarkImg);

    movieDiv.appendChild(bookmarkWrapper);

    // Description container, containing movie name and description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList = "movieDescriptionContainer";

    const movieDescription = document.createElement('p');
    movieDescription.classList.add("movieDescription");

    const categoryIcon = item.category === "Movie"
        ? 'assets/icon-category-movie.svg'
        : 'assets/icon-category-tv.svg';
    
    // Build metadata with proper structure (better for screen readers)
    const yearSpan = document.createElement('span');
    yearSpan.textContent = item.year;
    
    const categorySpan = document.createElement('span');
    const catIcon = document.createElement('img');
    catIcon.src = categoryIcon;
    catIcon.alt = item.category;
    catIcon.classList.add('categoryIcon');
    categorySpan.appendChild(catIcon);
    categorySpan.appendChild(document.createTextNode(` ${item.category}`));
    
    const ratingSpan = document.createElement('span');
    ratingSpan.textContent = item.rating;
    
    movieDescription.appendChild(yearSpan);
    movieDescription.appendChild(document.createTextNode(' • '));
    movieDescription.appendChild(categorySpan);
    movieDescription.appendChild(document.createTextNode(' • '));
    movieDescription.appendChild(ratingSpan);

    const movieName = document.createElement('h1');
    movieName.innerText = item.title;
    movieName.classList.add("movieName");

    descriptionContainer.appendChild(movieDescription);
    descriptionContainer.appendChild(movieName);

    // 
    cardDiv.appendChild(movieDiv);
    cardDiv.appendChild(descriptionContainer);

    cardDiv.addEventListener("click", () => {
        navigateTo(`#/movies/${item.title}`);
    });

    return cardDiv;
}

export default movieCard;