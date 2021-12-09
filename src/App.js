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
import Register from './components/Auth/Register';
import AllPosts from './components/AllPosts/AllPosts'

function App() {
    return (
        <Fragment>
            <Navigation />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/posts" element={<AllPosts />} />

            </Routes>

            <Footer />
        </Fragment >
    );
}

export default App;
