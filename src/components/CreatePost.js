import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../slices/postsSlice';

export default function CreatePost() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(users[0].id);
  const [content, setContent] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!title || !content) return;

    dispatch(addPost({ title, content, userId }));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      
      <select id="postAuthor" value={userId} onChange={e => setUserId(e.target.value)}>
        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>

      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      
      <button type="submit">Submit</button>
    </form>
  );
}
