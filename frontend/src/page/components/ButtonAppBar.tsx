//ButtonAppBar
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const ButtonAppBar: React.FC = () => {

  const navigate = useNavigate();
const HomeTransfer = () =>{
  navigate('/');
};

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" onClick={HomeTransfer}>
            BlackChecker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;