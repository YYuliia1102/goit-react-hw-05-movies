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
        return data;
    } catch (error) {
        console.log('Error fetching movie details:', error);
        return null;
    }
};
