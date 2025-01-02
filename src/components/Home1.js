import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card text-center" style={{ width: '20rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Welcome!</h5>
                        <p className="card-text">Choose an option to continue:</p>
                        <div className="d-grid gap-2">
                            <Link to="/login" className="btn btn-primary">Login</Link>
                            <Link to="/registration" className="btn btn-secondary">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;