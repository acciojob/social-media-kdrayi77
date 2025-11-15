import React from 'react';
import { useSelector } from 'react-redux';
import CreatePost from './CreatePost';
import Post from './Post';

export default function PostsPage() {
  const posts = useSelector(state => state.posts.posts);

  return (
    <section>
      <CreatePost />
      <div className="posts-list">
        {posts.map(p => <Post key={p.id} post={p} />)}
      </div>
    </section>
  );
}
