import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { fetchDishes } from '../../store/dishesThunk';
import { selectDishes } from '../../store/dishesSlice';
import Dish from './Dish';

const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);


  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);
  return (
    <>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          dish={dish}
        />
      ))}
    </>
  );
};

export default Dishes;