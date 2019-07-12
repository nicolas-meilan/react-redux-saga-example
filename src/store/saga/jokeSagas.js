import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects';
import { getJoke } from '../api';
import {
    ACTION_TYPES,
    fetchJokeSuccess,
    fetchJokeError
} from '../action';

const fetchJokeSaga = function*() {
    try {
        const response = yield call(getJoke);
        yield put(fetchJokeSuccess(response));
    } catch (error) {
        yield put(fetchJokeError(error.message));
        
    }
};

export function* fetchJoke() {
    yield takeEvery(ACTION_TYPES.FETCH_JOKE, fetchJokeSaga);
}