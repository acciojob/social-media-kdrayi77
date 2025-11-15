import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from '../slices/postsSlice';

export default function PostDetails() {
  const { postId } = useParams();
  const post = useSelector(state => state.posts.posts.find(p => p.id === postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  if (!post) return <div>Post not found</div>;

  const onSave = () => {
    dispatch(editPost({ id: post.id, title, content }));
    setEditing(false);
  };

  return (
    <article className="post">
      {!editing ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button className="button" onClick={() => setEditing(true)}>Edit</button>
        </>
      ) : (
        <div>
          <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
          <button onClick={onSave}>Save</button>
        </div>
      )}

      <button onClick={() => navigate(-1)}>Back</button>
    </article>
  );
}
