import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getAllCategories } from './services/products';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(categories => setCategories(categories))
  }, []);

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {categories.map((category) => {
        return (
          <ListItem key={category}>
            <Chip
              label={category}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
