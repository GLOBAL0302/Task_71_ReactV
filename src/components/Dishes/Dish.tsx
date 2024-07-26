import { IDishState } from '../../types';
import { Box, Button, Paper, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../app/hooks';
import { deleteDishThunk } from '../../store/dishesThunk';
import { NavLink, useLocation } from 'react-router-dom';

import { addToCart} from '../../store/dishesSlice';

interface Props {
  dish:IDishState;
}
const Dish:React.FC<Props> = ({dish}) => {
  const {pathname:location} = useLocation();

  const dispatch = useAppDispatch();


  return (
    <Paper elevation={6}>
      <Box
        onClick={()=> location=== "/" ? dispatch(addToCart(dish)) : null}
        component="div" display="flex" justifyContent="space-between" alignItems="center" padding={1}>
        <Box>
          <img
            style={{maxHeight: "100px" }}
            className="rounded-circle" src={`${dish.image}`} alt="DishImg" />
          <Typography component="span" variant="h5" className="ms-3">{dish.title}</Typography>
        </Box>
        {location === "/" && (<Typography component="p" variant="h6">
          <strong>{}</strong>
        </Typography>)}
        <Typography component="p" variant="h6">
          <strong>{dish.price} KGS</strong>
        </Typography>
        {location == "/admin" &&(
          <Box component="div" className="d-flex gap-3">
            <NavLink to={`/addDish/${dish.id}`}>
              <Button color={'primary'} variant="contained">
                Edit<EditNoteIcon/>
              </Button>
            </NavLink>
            <Button
              onClick={()=>dispatch(deleteDishThunk(dish))}
              color={'error'} variant="contained">Delete<DeleteIcon/></Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default Dish;