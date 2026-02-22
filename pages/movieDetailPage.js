const movieDetailPage = (id) => {
    const title = decodeURIComponent(id);
    const main = document.createElement('main');

    main.innerHTML = `
        <div style="padding: 2rem; color: white;">
            <button id="backBtn" style="background: none; border: 1px solid white; color: white; padding: 0.5rem 1rem; cursor: pointer; border-radius: 6px; margin-bottom: 1rem;">
                ← Back
            </button>
            <h2>Movie ID: ${title}</h2>
            <p>Movie detail page for movie ${title}</p>
        </div>
    `;

    main.querySelector('#backBtn').addEventListener('click', () => {
        history.back();
    });

    return main;
};

export default movieDetailPage;