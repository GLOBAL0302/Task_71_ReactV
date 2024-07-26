import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import FastbootIcon from '@mui/icons-material/Fastfood';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { IDishInput, IDishState } from '../../types';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createDish, editDishThunk } from '../../store/dishesThunk';
import { useParams } from 'react-router-dom';
import { selectDishes } from '../../store/dishesSlice';

const AddDishForm: React.FC = () => {
  let initialState: IDishInput = {
    title: '',
    price: '',
    image: '',
  };

  const { id: dishId } = useParams();
  const selectedDish: IDishState | undefined = useAppSelector(
    selectDishes,
  ).find((dish) => dish.id === dishId);

  if (dishId) {
    if (selectedDish) {
      initialState = {
        title: selectedDish?.title,
        price: selectedDish?.price,
        image: selectedDish?.image,
      };
    }
  }

  const dispatch = useAppDispatch();

  const [userInput, setUserInput] = useState<IDishInput>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dishId) {
      dispatch(editDishThunk({ ...userInput, id: dishId }));
    } else {
      dispatch(createDish(userInput));
    }
  };

  return (
    <Grid
      onSubmit={onSubmit}
      padding={3}
      gap={2}
      component="form"
      bgcolor={'white'}
      container
      direction={'column'}
    >
      <Grid item>
        <Typography variant="h3" component="span" color="textSecondary">
          {dishId ? 'Edit' : 'Create Dish'}
        </Typography>
        <FastbootIcon sx={{ color: 'black' }} />
      </Grid>
      <Grid item>
        <TextField
          value={userInput.title}
          onChange={onChange}
          fullWidth
          required
          type="text"
          name="title"
          id="title"
          label="Title"
          variant="filled"
        />
      </Grid>
      <Grid item>
        <TextField
          value={userInput.price}
          onChange={onChange}
          fullWidth
          required
          type="number"
          name="price"
          id="price"
          label="Price"
          variant="filled"
        />
      </Grid>
      <Grid item>
        <TextField
          value={userInput.image}
          onChange={onChange}
          fullWidth
          required
          type="url"
          name="image"
          id="image"
          label="Image"
          variant="filled"
        />
      </Grid>
      <Box className="d-flex">
        <Button
          type="submit"
          color="success"
          className="ms-auto"
          variant="contained"
        >
          {dishId ? 'Save' : 'Add'}
          <ControlPointIcon />
        </Button>
      </Box>
    </Grid>
  );
};

export default AddDishForm;
