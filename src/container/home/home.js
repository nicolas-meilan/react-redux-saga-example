import React, { useCallback, useEffect } from 'react';

import { Home } from '../../component';

import { useSelector, useDispatch } from 'react-redux';
import { fetchJoke } from '../../store/action';


const HomeContainer = () => {
    const {
        joke,
        loading,
        error
    } = useSelector(({joke: {joke, loading, error}}) => ({joke, loading, error}));
    const dispatch = useDispatch();
    const getJoke = useCallback(() => dispatch(fetchJoke()), [dispatch]);
    useEffect(() => {
        getJoke();
    }, [getJoke]);
    return (
        <Home
            joke={joke}
            loading={loading}
            error={error}
            getJoke={getJoke}
        />
    );
};

export default HomeContainer;
