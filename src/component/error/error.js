import React from 'react';

import './error.css';


export default class Error extends React.Component {
    state = { visible: true };

    close = () => {
        this.setState({visible: false});
    }
    
    render() {
        const { message } = this.props;
        const { visible } = this.state;
        return (
            <>
                {
                visible && !!message && (
                <div className='error'>
                    <span className='error-message'>{message}</span>
                    <button className='close' onClick={this.close}>x</button>
                </div>
                )
            }
            </>
        );
    }
}