import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCastData = async () => {
            const castData = await fetchMovieCast(movieId);
            setCast(castData);
        };

        if (movieId) {
            fetchCastData();
        }
    }, [movieId]);

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>
                        {/* <NavLink to={`/movies/${movieId}/cast/${actor.id}`}>{actor.name}</NavLink> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;
