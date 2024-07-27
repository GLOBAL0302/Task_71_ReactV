import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CancelIcon from '@mui/icons-material/Cancel';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Divider, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCheckOutDishes } from '../../store/dishesSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { IOrderInfo } from '../../types';
import { submitOrdersThunks } from '../../store/dishesThunk';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CheckOut: React.FC<Props> = ({ open, setOpen }) => {
  const cartDishes = useAppSelector(selectCheckOutDishes);
  const dispatch = useAppDispatch();
  const checkOutDish = cartDishes.filter(
    (value, index) => cartDishes.indexOf(value) === index,
  );

  const handleClose = () => {
    setOpen(false);
  };

  const completeOrder = () => {
    const allCartItems = checkOutDish.reduce<IOrderInfo>((acc, item) => {
      acc[item.dish.id] = item.amount;
      return acc;
    }, {});
    dispatch(submitOrdersThunks(allCartItems));
    handleClose();
  };

  const total = cartDishes.reduce((acc, dish) => {
    return acc + dish.amount * parseFloat(dish.dish.price);
  }, 0);
  return (
    <Box bgcolor="white">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box paddingY={2} width="400px" component="div">
          <Divider>
            <Typography component="h5" variant="h5">
              Your Order
            </Typography>
          </Divider>
          <DialogContent>
            {checkOutDish.map((dish) => (
              <div
                className="d-flex align-items-center justify-content-between"
                key={dish.dish.id}
              >
                <Typography component="p" variant="body1">
                  {dish.dish.title}
                </Typography>
                <Typography component="p" variant="body2">
                  x{dish.amount}
                </Typography>
                <Typography component="p" variant="body2">
                  {dish.dish.price} KGS
                </Typography>
                <Typography component="p" variant="body2">
                  = {dish.amount * parseInt(dish.dish.price)} KGS
                </Typography>
                <DeleteIcon color="error" />
              </div>
            ))}
            <Typography textAlign="right" component="h3" variant="body1">
              <strong>Total:</strong>{' '}
              <span className="text-decoration-underline">{total} KGS</span>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancel
              <CancelIcon />
            </Button>
            <Button variant="outlined" onClick={completeOrder}>
              Order
              <DeliveryDiningIcon />
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default CheckOut;
