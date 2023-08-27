import React from 'react';
import { Router } from './providers/router';
import { Navbar } from '../components/navbar';

import './styles/index.css';

function App() {
    return (
        <div className='App'>
            <Navbar className={'navbar'} />
            <Router />
        </div>
    );
}

export default App;
