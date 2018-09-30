// Very useful
// https://reactjs.org/docs/error-boundaries.html
import React, {Component} from 'react';

// ideally you should reuse this class throughout your app
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }


    render () {
        if(this.state.hasError) {
            <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;