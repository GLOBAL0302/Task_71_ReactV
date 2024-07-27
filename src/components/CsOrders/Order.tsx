import { IOrderInfo } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectDishes } from '../../store/dishesSlice';
import { Typography } from '@mui/material';

interface Props {
  order: IOrderInfo[];
  children?: React.ReactNode;
}

const Order: React.FC<Props> = ({ order, children }) => {
  const dishes = useAppSelector(selectDishes);
  let totalAmount = 54;

  const test = Object.keys(order).map((id: string) => {
    const oneDish = dishes.find((dish) => dish.id === id);
    if (oneDish) {
      totalAmount += parseInt(oneDish.price) * order[id];
    }
    return (
      <Typography key={id} component="h5" variant="h5">
        x {order[id]} {oneDish && oneDish.title}{' '}
        <strong>{parseInt(order[id]) * parseInt(oneDish.price)} KGS</strong>
      </Typography>
    );
  });

  return (
    <>
      <div className="border border-1 p-3" style={{ maxWidth: '400px' }}>
        {test}
        <Typography className="ms-auto" component="h5" variant="h5">
          delivery: <strong>54 KGS</strong>
        </Typography>
        <div className="d-flex">
          <Typography component="h5" variant="h5">
            total:{' '}
            <span className="text-decoration-underline">{totalAmount}</span>
          </Typography>
          {children}
        </div>
      </div>
    </>
  );
};

export default Order;
