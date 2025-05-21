import { TextField, Button, Card, CardContent } from '@mui/material';
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

export default function PostForm({ refresh }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = async () => {
    await axios.post('http://localhost:8080/api/posts/create', {
      title,
      description,
      image: '',
      userId: user.id
    });
    refresh();
    setTitle('');
    setDescription('');
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <TextField label="Title" fullWidth value={title} onChange={e => setTitle(e.target.value)} sx={{ mb: 1 }} />
        <TextField label="Description" fullWidth multiline rows={4} value={description} onChange={e => setDescription(e.target.value)} />
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 1 }}>Post</Button>
      </CardContent>
    </Card>
  );
}
