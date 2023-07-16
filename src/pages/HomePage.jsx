
import React, { useEffect, useState } from 'react';

import { fetchPostDetails, fetchPosts } from 'services/api';

export const HomePage = () => {
    useEffect(() => {
        const fetchPostsData = async () => {
            try {
                setIsLoading(true);
                const movie = await fetchPosts();
                setPosts(movie);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostsData();
    }, []);

    return (
        <div>
            <h1>HomePage</h1>
            {error !== null && (
                <p className="c-error">
                    Oops, some error occured. Please, try again later. Error: {error}
                </p>
            )}
            {posts.length > 0 &&
                posts.map(movie => {
                    return (
                        <Link className="post" key={movie.id} to={`/posts/${movie.id}`}>
                            <strong>Id: {movie.id}</strong>
                            <h4>{movie.title}</h4>
                            <p>{movie.body}</p>
                        </Link>
                    );
                })}
        </div>
    );
}

export default HomePage;