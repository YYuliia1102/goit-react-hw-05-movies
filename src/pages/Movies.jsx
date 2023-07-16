import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const Movies = () => {
    const { movieId } = useParams();

    return (
        <div>
            <MovieDetails movieId={movieId} />
        </div>
    );
};

export default Movies;
