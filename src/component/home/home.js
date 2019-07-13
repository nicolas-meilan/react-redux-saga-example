import React from 'react';
import PropTypes from 'prop-types';

import { Error, Joke } from '../';

import './home.css';


const Home = ({ joke, loading, error, getJoke }) => {
    return (
        <div className='home'>
            <Joke
                joke={joke}
                getJoke={getJoke}
                loading={loading}
            />
            {!loading && <Error message={error} />}
        </div>
    );
}

Home.propTypes = {
    joke: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    getJoke: PropTypes.func.isRequired,
};

Home.defaultProps = {
    error: undefined,
    loading: false,
};

export default Home;
