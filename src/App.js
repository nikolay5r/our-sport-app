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
import AllPosts from './components/Posts/AllPosts/AllPosts'
import MyPosts from './components/Posts/MyPosts/MyPosts';
import MyProfile from './components/MyProfile/MyProfile';
import CreatePost from './components/Posts/CreatePost';
import PostDetails from './components/Posts/PostDetails/PostDetails';
import EditPost from './components/Posts/EditPost';

function App() {
    return (
        <Fragment>
            <Navigation />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/posts" element={<AllPosts />} />
                <Route path="/posts/user/userId" element={<MyPosts />} />
                <Route path="/profile/userId" element={<MyProfile />} />
                <Route path="/posts/create" element={<CreatePost />} />
                <Route path="/posts/postId" element={<PostDetails />} />
                <Route path="/posts/postId/edit" element={<EditPost />} />

            </Routes>

            <Footer />
        </Fragment >
    );
}

export default App;
