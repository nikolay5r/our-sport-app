import './App.css';
import { Fragment } from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';

function App() {
    return (
        <Fragment>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </Fragment >
    );
}

export default App;
