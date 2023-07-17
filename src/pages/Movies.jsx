import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api.js';

const Movies = () => {
    const { movieId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation;
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search by movies"
                    required
                    minLength={2}
                />
                <button type="submit">Search</button>
            </form>
            {searchMovie ? (
                movies.length > 0 ? (
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        width={100}
                                    />
                                    {movie.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No movies found</p>
                )
            ) : null}
            <MovieDetails movieId={movieId} />
        </div>
    );
};

export default Movies;
