import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Dishes from '../../components/Dishes/Dishes';


const HomePage = () => {
  return (
    <div className="bg-dark p-3 rounded">
      <Box
        className="d-flex justify-content-between align-items-center"
        component="div">
        <Typography component="h4" variant="h3">
          Dishes
        </Typography>
        <Button variant="contained" color="success">
          <NavLink
            className="text-white text-decoration-none"
            to="/addDish">
            Add
            <FastfoodIcon/>
          </NavLink>
        </Button>
      </Box>
      <Box component="div">
        <Dishes/>
      </Box>
    </div>
  );
};

export default HomePage;