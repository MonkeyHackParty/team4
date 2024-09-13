import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// ButtonAppBar コンポーネントの型定義
const ButtonAppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            BlackChecker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
