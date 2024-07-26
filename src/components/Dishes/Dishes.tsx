import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { fetchDishes } from '../../store/dishesThunk';
import { selectDishes } from '../../store/dishesSlice';
import Dish from './Dish';
import { Box, Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CheckOut from '../CheckOut/CheckOut';

const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);
  return (
    <>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
      {isCartOpen && <CheckOut open={isCartOpen} setOpen={setIsCartOpen} />}
      <Box marginTop={2} textAlign="right">
        <Button
          onClick={() => setIsCartOpen(true)}
          variant="contained"
          color="primary"
        >
          CheckOut
          <ShoppingCartCheckoutIcon />
        </Button>
      </Box>
    </>
  );
};

export default Dishes;
