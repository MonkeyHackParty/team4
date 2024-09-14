//Circular
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


interface CircularProps {
  value: number;
}

const Circular: React.FC<CircularProps> = (props) => {
  const getColor = (value: number) => {
    if (0 <= value && value < 40) return '#565b95'; // Deep Green
    if (40 <= value && value < 80) return '#ffcc00'; // Yellow
    if (80 <= value && value <= 100) return '#e23b12'; // Red
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Typography
        variant="caption"
        component="div"
        sx={{
          color: 'text.secondary',
          fontSize: '1rem',
          position: 'absolute',
          transform: 'translate(-50%, -370%)',
        }}
      >
        BlackRate
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress
          size="7rem"
          variant="determinate"
          sx={{
            position: 'absolute',
            color: getColor(props.value)
          }}
          {...props}
        />
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{
              color: 'text.secondary',
              fontSize: '1rem',
            }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Circular;