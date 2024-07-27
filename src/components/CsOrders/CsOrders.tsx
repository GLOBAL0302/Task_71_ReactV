import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { deleteOrdersThunk, fetchCsOrders } from '../../store/dishesThunk';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAllOrders } from '../../store/dishesSlice';
import Order from './Order';

const CsOrders = () => {
  const dispatch = useAppDispatch();
  const allOrders = useAppSelector(selectAllOrders);

  useEffect(() => {
    dispatch(fetchCsOrders());
  }, [dispatch]);

  const deleteOneOrder = async (id: string) => {
    await dispatch(deleteOrdersThunk(id));
    await dispatch(fetchCsOrders());
  };

  return (
    <Box className="bg-dark" padding={3} component="div">
      <Typography variant="h5" color="h5">
        Customers Orders
      </Typography>
      {allOrders.map((order) => (
        <Order key={order.id} order={order.items}>
          <Button
            onClick={() => deleteOneOrder(order.id)}
            className="ms-auto"
            variant="contained"
          >
            Completed
          </Button>
        </Order>
      ))}
    </Box>
  );
};

export default CsOrders;
