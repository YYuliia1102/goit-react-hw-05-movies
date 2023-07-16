import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Route, Routes } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import Cast from './CostInfo';

const Movie = () => {
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
                <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </div>
            <Routes>
                <Route path="/movies/:movieId/cast" element={<Cast />} />
            </Routes>
        </div>
    );
};

export default Movie;
