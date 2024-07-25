import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import FastbootIcon from '@mui/icons-material/Fastfood';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { IDishInput } from '../../types';
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createDish } from '../../store/dishesThunk';


const AddDishForm = () => {
  const initialState:IDishInput = {
    title: "",
    price:"",
    image:""
  };

  const dispatch = useAppDispatch()

  const [userInput, setUserInput] = useState<IDishInput>(initialState);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserInput(prevState=>({
      ...prevState,
      [name]:value
    }));
  };

  const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(createDish(userInput));
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
        <Typography variant="h5" component="span" gutterBottom>
          Add Dish
        </Typography>
        <FastbootIcon />
      </Grid>
      <Grid item>
        <TextField
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
          onChange={onChange}
          fullWidth
          required
          type="url"
          name="image"
          id="image"
          label="Image"
          variant="filled" />
      </Grid>
      <Box className="d-flex">
        <Button
          type="submit"
          color="success"
          className="ms-auto"
          variant="contained" >
          Add<ControlPointIcon/>
        </Button>
      </Box>
    </Grid>
  );
};

export default AddDishForm;
