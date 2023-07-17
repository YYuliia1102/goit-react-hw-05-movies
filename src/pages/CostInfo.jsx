import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const fetchMovieCredits = async () => {
            if (!movieId) return;

            const creditsData = await getMovieCredits(movieId);
            setCredits(creditsData);
        };

        fetchMovieCredits();
    }, [movieId]);

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (
        <div>
            <h2>Movie Cast</h2>
            <ul>
                {credits.map((actor) => (
                    <li key={actor.id}>
                        <img
                            src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                                    : defaultImg
                            }
                            alt={actor.name}
                            width="100"
                        />
                        <p>{actor.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Cast.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default Cast;
