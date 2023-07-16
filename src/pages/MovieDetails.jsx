
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import Cast from './CostInfo';
import Reviews from './Reviews';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            const movieDetails = await fetchMovieDetails(movieId);
            setMovie(movieDetails);
        };

        if (movieId) {
            getMovieDetails();
        }
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
            <p>Overview: {movie.overview}</p>
            <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
            <div>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </div>
            <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Routes>
        </div>
    );
};

export default MovieDetails;
