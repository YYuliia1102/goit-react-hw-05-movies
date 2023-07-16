import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchMovieReviews = async () => {
            if (!movieId) return;

            const reviewsData = await getMovieReviews(movieId);
            setReviews(reviewsData);
        };

        fetchMovieReviews();
    }, [movieId]);

    return (
        <div>
            <h2>Movie Reviews</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available</p>
            )}
        </div>
    );
};

export default Reviews;
