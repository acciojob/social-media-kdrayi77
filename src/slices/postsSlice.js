import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: 'p1',
      title: 'Welcome Post',
      content: 'This is the first post.',
      userId: 'u1',
      reactions: { r1: 0, r2: 0, r3: 0, r4: 0, r5: 0 }
    }
  ]
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.unshift(action.payload);
      },
      prepare({ title, content, userId }) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            reactions: { r1: 0, r2: 0, r3: 0, r4: 0, r5: 0 }
          }
        }
      }
    },
    editPost(state, action) {
      const { id, title, content } = action.payload;
      const existing = state.posts.find(p => p.id === id);
      if (existing) {
        existing.title = title;
        existing.content = content;
      }
    },
    reactToPost(state, action) {
      const { id, reaction } = action.payload;
      const post = state.posts.find(p => p.id === id);
      if (post && reaction !== 'r5') {
        post.reactions[reaction] += 1;
      }
    }
  }
});

export const { addPost, editPost, reactToPost } = postsSlice.actions;
export default postsSlice.reducer;
