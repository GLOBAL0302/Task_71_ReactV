import { IDishState } from '../../types';
import { Box, Button, Paper, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../app/hooks';
import { deleteDishThunk } from '../../store/dishesThunk';

interface Props {
  dish:IDishState;
}

const Dish:React.FC<Props> = ({dish}) => {
  const dispatch = useAppDispatch()
  return (
    <Paper elevation={4}>
      <Box component="div" display="flex" justifyContent="space-between" alignItems="center" padding={1}>
        <Box>
          <img
            style={{maxHeight: "120px"}}
            className="rounded-circle" src={`${dish.image}`} alt="DishImg" />
          <Typography component="span" variant="h5" className="ms-3">{dish.title}</Typography>
        </Box>
        <Typography component="p" variant="h6">
          <strong>{dish.price} KGS</strong>
        </Typography>
        <Box component="div" className="d-flex gap-3">
          <Button color={'primary'} variant="contained">Edit<EditNoteIcon/></Button>
          <Button
            onClick={()=>dispatch(deleteDishThunk(dish))}
            color={'error'} variant="contained">Delete<DeleteIcon/></Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Dish;