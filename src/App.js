import './App.css';
import { Fragment } from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer';
import Home from './components/Home/Home';

function App() {
    return (
        <Fragment>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
        </Fragment >
    );
}

export default App;
