import ACTION_TYPES from './action-types';

export const fetchJoke = () => ({ type: ACTION_TYPES.FETCH_JOKE });

export const fetchJokeSuccess = (data) => ({ type: ACTION_TYPES.SUCCESFULL_FETCHING_JOKE, data });

export const fetchJokeError = (error) => ({ type: ACTION_TYPES.ERROR_FETCHING_JOKE, error });
