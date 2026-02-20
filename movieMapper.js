const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const mapMovieForCard = (movie) => ({
    id: movie.id,
    title: movie.title,
    year: movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : "N/A",
    category: "Movie",
    rating: movie.vote_average
        ? movie.vote_average.toFixed(1)
        : "N/A",
    isBookmarked: false, // local state
    thumbnail: movie.poster_path
        ? `${IMAGE_BASE}${movie.poster_path}`
        : "",
});
