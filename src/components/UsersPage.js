import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function UsersPage() {
  const users = useSelector(state => state.users);
  const posts = useSelector(state => state.posts.posts);
  const [selectedUser, setSelectedUser] = useState(null);

  const userPosts = selectedUser ? posts.filter(p => p.userId === selectedUser) : [];

  return (
    <section>
      <ul>
        {users.map(u => (
          <li key={u.id} onClick={() => setSelectedUser(u.id)}>{u.name}</li>
        ))}
      </ul>

      <div className="user-posts">
        {userPosts.map(p => (
          <article key={p.id} className="post">
            <h4>{p.title}</h4>
            <p>{p.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
