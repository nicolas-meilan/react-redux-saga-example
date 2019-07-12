import { ACTION_TYPES } from '../action';

const initialState = {
    joke: '',
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_JOKE:
            return state = {
                ...state,
                loading: true,
            };
        case ACTION_TYPES.ERROR_FETCHING_JOKE:
            return state = {
                ...state,
                error: action.error,
                joke: '',
                loading: false,
            };
        case ACTION_TYPES.SUCCESFULL_FETCHING_JOKE:
            return state = {
                ...state,
                joke: action.data.value,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
}