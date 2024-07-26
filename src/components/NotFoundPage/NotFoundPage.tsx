import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const NotFoundPage = () => {
  return (
    <Box bgcolor="red" padding={4}>
      <Typography component="h3" variant="h3">
        Page is not found <ErrorIcon fontSize="large" sx={{ color: 'white' }} />
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
