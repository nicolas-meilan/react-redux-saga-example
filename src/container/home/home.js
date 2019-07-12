import React from 'react';
import { Home } from '../../component';
import { connect } from 'react-redux';
import { fetchJoke } from '../../store/action';

const mapStateToProps = ( {joke} ) => ({
    joke: joke.joke,
    loading: joke.loading,
    error: joke.error
});

const mapDispatchToProps = dispatch => ({ getJoke: () => dispatch(fetchJoke())});

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getJoke();
    }

    render() {
        const {
            joke,
            loading,
            getJoke,
            error
        } = this.props;
        console.log(error)
        return(
            <Home
                joke={joke} 
                loading={loading}
                error={error}
                getJoke={getJoke}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);