import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotifications } from '../slices/notificationsSlice';

export default function NotificationsPage() {
  const items = useSelector(s => s.notifications.items);
  const dispatch = useDispatch();

  const refresh = () => {
    dispatch(setNotifications([
      { id: 'n1', text: 'New follower' },
      { id: 'n2', text: 'Post liked' }
    ]));
  };

  return (
    <section>
      <button className="button" onClick={refresh}>Refresh Notifications</button>

      <section className="notificationsList">
        {items.length ? items.map(n => <div key={n.id}>{n.text}</div>) : null}
      </section>
    </section>
  );
}
