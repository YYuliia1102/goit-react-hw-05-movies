import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            const data = await fetchTrendingMovies();
            setMovies(data);
        };

        getTrendingMovies();
    }, []);

    return (
        <div>
            <h1 className={styles.heading}>Trending Movies</h1>
            <div className={styles.movieGrid}>
                {movies.map((movie) => (
                    <div key={movie.id} className={styles.movieCard}>
                        <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className={styles.movieImage}
                            />
                            <h2 className={styles.movieTitle}>{movie.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

HomePage.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default HomePage;
