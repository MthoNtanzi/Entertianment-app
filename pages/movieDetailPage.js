import { getByTitle } from '../dataService.js';
import { toggleBookmark } from '../dataService.js';

const movieDetailPage = (id) => {
    const title = decodeURIComponent(id);
    const item = getByTitle(title);
    const main = document.createElement('main');
    main.classList.add('movieDetailPage');

    if (!item) {
        const error = document.createElement('p');
        error.textContent = 'Movie not found.';
        error.classList.add('errorMessage');
        main.appendChild(error);
        return main;
    }

    // Back button
    const backBtn = document.createElement('button');
    backBtn.textContent = '← Back';
    backBtn.classList.add('backBtn');
    backBtn.addEventListener('click', () => history.back());

    // Hero image
    const hero = document.createElement('div');
    hero.classList.add('movieDetailHero');
    hero.style.backgroundImage = `url('${item.thumbnail.regular.large}')`;

    // Bookmark button on hero
    const bookmarkWrapper = document.createElement('div');
    bookmarkWrapper.classList.add('bookmarkImgWrapper');

    const bookmarkImg = document.createElement('img');
    bookmarkImg.src = item.isBookmarked
        ? 'assets/icon-bookmark-full.svg'
        : 'assets/icon-bookmark-empty.svg';
    bookmarkImg.alt = 'bookmark';
    bookmarkImg.classList.add('bookmarkImg');

    bookmarkWrapper.appendChild(bookmarkImg);
    bookmarkWrapper.addEventListener('click', () => {
        toggleBookmark(item.title);
        item.isBookmarked = !item.isBookmarked;
        bookmarkImg.src = item.isBookmarked
            ? 'assets/icon-bookmark-full.svg'
            : 'assets/icon-bookmark-empty.svg';
    });

    hero.appendChild(bookmarkWrapper);

    // Info section
    const infoSection = document.createElement('div');
    infoSection.classList.add('movieDetailInfo');

    const movieTitle = document.createElement('h1');
    movieTitle.textContent = item.title;
    movieTitle.classList.add('movieDetailTitle');

    const meta = document.createElement('p');
    meta.classList.add('movieDetailMeta');

    const categoryIcon = item.category === 'Movie'
        ? 'assets/icon-category-movie.svg'
        : 'assets/icon-category-tv.svg';

    const catIcon = document.createElement('img');
    catIcon.src = categoryIcon;
    catIcon.alt = item.category;
    catIcon.classList.add('categoryIcon');

    meta.appendChild(document.createTextNode(`${item.year} • `));
    meta.appendChild(catIcon);
    meta.appendChild(document.createTextNode(` ${item.category} • ${item.rating}`));

    infoSection.appendChild(movieTitle);
    infoSection.appendChild(meta);

    main.appendChild(backBtn);
    main.appendChild(hero);
    main.appendChild(infoSection);

    return main;
};

export default movieDetailPage;