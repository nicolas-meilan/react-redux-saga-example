import React from 'react';
import PropTypes from 'prop-types';

import { loadingImage } from '../../const';

import './joke.css';


const Joke = ({ joke, loading, getJoke }) => {
    return (
        <>
            {loading
                ? <img
                    className='loading-image'
                    alt='loading'
                    src={loadingImage}
                />
                : <span className='joke'>{joke}</span>
            }
            <button className='joke-button' onClick={getJoke}>{'GET JOKE'}</button>
        </>
    );
}

Joke.propTypes = {
    joke: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    getJoke: PropTypes.func.isRequired
};

Joke.defaultProps = {
    loading: false
};

export default Joke;
