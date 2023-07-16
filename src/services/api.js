import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=Batman&callback=test';

export const fetchPosts = async () => {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data;
};

export const fetchPostDetails = async postId => {
    const { data } = await axios.get(
        `${BASE_URL}/movie/${postId}`
    );
    return data;
};

export const fetchPostComments = async postId => {
    const { data } = await axios.get(
        `${BASE_URL}/movie/${postId}/comments`
    );
    return data;
};