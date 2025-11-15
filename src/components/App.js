import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage';
import NotificationsPage from './components/NotificationsPage';
import PostDetails from './components/PostDetails';

export default function App() {
  return (
    <div className="App">
      <nav>
        <h1>GenZ</h1>
        <div className="navlinks">
          <Link to="/">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/notifications">Notifications</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}
