import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

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
            <h1>Trending Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                width={100}
                            />
                        </Link>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );


};

export default HomePage;