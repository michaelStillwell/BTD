// Import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <Link to="/game"><button>Play</button></Link>
            </div>
        )
    }
}

export default LandingPage;