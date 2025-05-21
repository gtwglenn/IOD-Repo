import { TextField, Button } from '@mui/material';
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function CommentForm({ postId, refresh }) {
  const [content, setContent] = useState('');
  const { user } = useContext(UserContext);

  const submitComment = async () => {
    await axios.post('http://localhost:8080/api/comments/create', {
      content,
      postId,
      userId: user.id
    });
    refresh();
    setContent('');
  };

  return (
    <div>
      <TextField label="Comment" fullWidth value={content} onChange={e => setContent(e.target.value)} sx={{ mt: 1 }} />
      <Button variant="outlined" onClick={submitComment} sx={{ mt: 1 }}>Add Comment</Button>
    </div>
  );
}
