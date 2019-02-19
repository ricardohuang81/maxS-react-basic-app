import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        this.setState({ 
            hasError: true, errorMessage: error 
        });
    };

    render() {
        if (this.state.errorMessage) {
            return <h1>Something went wrong</h1>;
        } else {
            return this.props.children;
        }
    }
}


export default ErrorBoundary;