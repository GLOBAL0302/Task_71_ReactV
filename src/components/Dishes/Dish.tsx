import { IDishState } from '../../types';
import { Box, Button, Paper, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { NavLink, useLocation } from 'react-router-dom';

import { addToCart, selectCheckOutDishes } from '../../store/dishesSlice';

interface Props {
  dish: IDishState;
  children: React.ReactNode;
}
const Dish: React.FC<Props> = ({ dish, children }) => {
  const { pathname: location } = useLocation();
  const cartDishes = useAppSelector(selectCheckOutDishes);
  const currentAmount = cartDishes.filter((item) => item.dish.id === dish.id);

  const dispatch = useAppDispatch();

  return (
    <Paper elevation={6} className="mb-2">
      <Box
        onClick={() => (location === '/' ? dispatch(addToCart(dish)) : null)}
        component="div"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={1}
      >
        <Box>
          <img
            style={{ height: '100px', width: '100px' }}
            className="rounded-circle"
            src={`${dish.image}`}
            alt="DishImg"
          />
          <Typography component="span" variant="h5" className="ms-3">
            {dish.title}
          </Typography>
        </Box>
        {location === '/' && currentAmount.length > 0 && (
          <Typography component="p" variant="h6">
            <strong>X {currentAmount[0].amount}</strong>
          </Typography>
        )}
        <Typography component="p" variant="h6">
          <strong>{dish.price} KGS</strong>
        </Typography>
        {location == '/admin' && (
          <Box component="div" className="d-flex gap-3">
            <NavLink to={`/addDish/${dish.id}`}>
              <Button color={'primary'} variant="contained">
                Edit
                <EditNoteIcon />
              </Button>
            </NavLink>
            {children}
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default Dish;
