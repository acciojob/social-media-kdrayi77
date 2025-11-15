import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reactToPost } from '../slices/postsSlice';

export default function Post({ post }) {
  const dispatch = useDispatch();

  return (
    <article className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      <div className="reactions">
        <button onClick={() => dispatch(reactToPost({ id: post.id, reaction: 'r1' }))}>
          React1 ({post.reactions.r1})
        </button>
        <button onClick={() => dispatch(reactToPost({ id: post.id, reaction: 'r2' }))}>
          React2 ({post.reactions.r2})
        </button>
        <button onClick={() => dispatch(reactToPost({ id: post.id, reaction: 'r3' }))}>
          React3 ({post.reactions.r3})
        </button>
        <button onClick={() => dispatch(reactToPost({ id: post.id, reaction: 'r4' }))}>
          React4 ({post.reactions.r4})
        </button>
        <button onClick={() => dispatch(reactToPost({ id: post.id, reaction: 'r5' }))}>
          BrokenReact ({post.reactions.r5})
        </button>
      </div>

      <Link className="button" to={`/posts/${post.id}`}>View</Link>
    </article>
  );
}
