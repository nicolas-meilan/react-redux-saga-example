import { fork } from 'redux-saga/effects';
import { fetchJoke } from './jokeSagas';

export default function*() {
    yield fork(fetchJoke);
};