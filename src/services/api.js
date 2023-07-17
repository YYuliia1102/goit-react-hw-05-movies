const apiKey = '7bd54d4ecca90d61812ee42cdc93d740';

const fetchData = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
        return null;
    }
};

export const fetchTrendingMovies = async () => {
    const endpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
    return fetchData(endpoint).then((data) => data?.results || []);
};

export const fetchMovieDetails = async (movieId) => {
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    const data = await fetchData(endpoint);
    return data
        ? {
            title: data.title,
            release_date: data.release_date,
            vote_average: data.vote_average,
            overview: data.overview,
            genres: data.genres,
            poster_path: data.poster_path,
        }
        : null;
};

export const getMovieCredits = async (movieId) => {
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
    const data = await fetchData(endpoint);
    return data?.cast || [];
};

export const getMovieReviews = async (movieId) => {
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;
    const data = await fetchData(endpoint);
    return data?.results || [];
};

export const searchMovies = async (query) => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const data = await fetchData(endpoint);
    return data?.results || [];
};
