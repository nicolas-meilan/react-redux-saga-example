import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './error.css';


const Error = ({ message }) => {
    const [visible, setVisibility] = useState(true);
    const close = useCallback(() => setVisibility(false), []);
    return (
        <>
            {
                visible && !!message && (
                    <div className='error'>
                        <span className='error-message'>{message}</span>
                        <button className='close' onClick={close}>x</button>
                    </div>
                )
            }
        </>
    );
}

Error.propTypes = {
    message: PropTypes.string
};

Error.defaultProps = {
    message: undefined
};

export default Error;
