const apiKey = '7bd54d4ecca90d61812ee42cdc93d740';

export const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('Error fetching data:', error);
        return [];
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        const data = await response.json();
        const movieDetails = {
            title: data.title,
            release_date: data.release_date,
            vote_average: data.vote_average,
            overview: data.overview,
            genres: data.genres,
            poster_path: data.poster_path,
            cast: data.cast,
            // reviews: data.reviews,
        };

        return movieDetails;

    } catch (error) {
        console.log('Error fetching movie details:', error);
        return null;
    }
};

export const fetchMovieCast = async (movieId) => {
    try {
        const apiKey = '7bd54d4ecca90d61812ee42cdc93d740';
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        const data = await response.json();
        const cast = data.cast.map((cast) => ({
            id: cast.id,
            name: cast.name,
            profile_path: cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : null,
        }));
        return cast;
    } catch (error) {
        console.log('Error fetching movie cast:', error);
        return [];
    }
};

