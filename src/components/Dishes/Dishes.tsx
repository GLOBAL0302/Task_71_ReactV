import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { deleteDishThunk, fetchDishes } from '../../store/dishesThunk';
import { selectDishes } from '../../store/dishesSlice';
import Dish from './Dish';
import { Box, Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CheckOut from '../CheckOut/CheckOut';
import DeleteIcon from '@mui/icons-material/Delete';
import { IDishState } from '../../types';

const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const deleteOneDish = async (dish: IDishState) => {
    await dispatch(deleteDishThunk(dish));
    await dispatch(fetchDishes());
  };

  return (
    <>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish}>
          <Button
            onClick={() => deleteOneDish(dish)}
            color={'error'}
            variant="contained"
          >
            Delete
            <DeleteIcon />
          </Button>
        </Dish>
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
