import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import Cast from './CostInfo';
import Reviews from './Reviews';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

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
        return null;
    }

    return (
        <div className={styles.container}>
            <Link to={location.state?.from || '/'} className={styles.goBackLink}>
                Go back
            </Link>
            <div className={styles.movieInfo}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.movieImage}
                />
                <div className={styles.details}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <p className={styles.releaseDate}>Release Date: {movie.release_date}</p>
                    <p className={styles.voteAverage}>Vote Average: {movie.vote_average}</p>
                    <p className={styles.overview}>Overview: {movie.overview}</p>
                    <p className={styles.genres}>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
                </div>
            </div>
            <div className={styles.links}>
                <Link to="cast" className={styles.link}>
                    Cast
                </Link>
                <Link to="reviews" className={styles.link}>
                    Reviews
                </Link>
            </div>
            <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Routes>
        </div>
    );
};

MovieDetails.propTypes = {
    movieId: PropTypes.string,
};

export default MovieDetails;
