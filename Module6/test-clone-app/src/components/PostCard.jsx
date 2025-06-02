import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function PostCard({subtitle, title, onButtonClick}) {
  return (
      <Card variant="outlined">
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {subtitle}
            </Typography>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={onButtonClick}>Read More</Button>
        </CardActions>        
      </Card>
  );
}