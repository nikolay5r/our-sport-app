import './App.css';
import { Fragment } from 'react';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer';
import Home from './components/Home/Home';

function App() {
    return (
        <Fragment>
            <Navigation />

            <Home />
            
            <Footer />
        </Fragment >
    );
}

export default App;
