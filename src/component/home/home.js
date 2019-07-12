import React from 'react';
import Error from '../error';
import { loadingImage } from '../../const';
import './home.css';


export default class Home extends React.Component {
    render() {
        const { joke, getJoke, loading, error } = this.props;
        return (
            <div className='home'>
                { loading
                    ? <img
                        className='loading-image'
                        alt='loading'
                        src={loadingImage}
                      />
                    : (
                        <>
                            <span className='joke'>{joke}</span>
                            <Error message={error}/>
                        </>
                    )
                }
                <button className='joke-button' onClick={getJoke}>{'GET JOKE'}</button>
            </div>
        );
    }
}