import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api.js';
import styles from './Movies.module.css';

const Movies = () => {
    const { movieId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchMovie = searchParams.get('query');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            if (searchMovie) {
                const data = await searchMovies(searchMovie);
                setMovies(data);
            } else {
                setMovies([]);
            }
        };

        getMovies();
    }, [searchMovie]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target.children.search.value;
        setSearchParams({ query: searchValue });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search by movies"
                    required
                    minLength={2}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
            {searchMovie ? (
                movies.length > 0 ? (
                    <div className={styles.movieGrid}>
                        {movies.map((movie) => (
                            <div key={movie.id} className={styles.movieCard}>
                                <Link state={{ from: location }} to={`/movies/${movie.id}`} className={styles.movieLink}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        width={200}
                                        className={styles.movieImage}
                                    />
                                    <h2 className={styles.movieTitle}>{movie.title}</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies found</p>
                )
            ) : null}
            <MovieDetails movieId={movieId} />
        </div>
    );
};

Movies.propTypes = {
    movieId: PropTypes.string,
};

export default Movies;
