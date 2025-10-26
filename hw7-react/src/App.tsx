import React from 'react';
import { ApiButton } from '../src/components/api-button/ApiButton';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Homework 7</h1>
                <p>Press the button to get information about cats</p>
            </header>

            <main>
                <ApiButton />
            </main>
        </div>
    );
};

export default App;