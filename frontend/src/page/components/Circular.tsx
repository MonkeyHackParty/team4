//Circular
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


interface CircularProps {
  value: number; 
}

const Circular: React.FC<CircularProps> = (props) => {

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const animationDuration = 1; // アニメーションの時間（ミリ秒）
    const startTime = Date.now();
    const endValue = props.value;
  
    const animate = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const progressPercent = Math.min(elapsedTime / animationDuration, 1);
      setProgress(progressPercent * endValue);
  
      if (progressPercent < 1) {
        requestAnimationFrame(animate);
      }
  };
  
  animate();
  }, [props.value]);
  

  //変更点１（パーセントに合わせて色の変更）
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
            //変更点２
            color: getColor(progress),
          }}
          value={Math.round(progress)}
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
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Circular;