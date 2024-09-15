//Loading
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading: React.FC = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '70vh',
      }}
    >
      <CircularProgress sx={{ color: '#1760a0' }} />
    </Box>
  );
};

export default Loading;