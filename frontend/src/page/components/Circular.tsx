import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// propsの型定義
interface CircularProps {
  value: number; // CircularProgressに渡す値
  // 必要に応じて他のプロパティを追加
}

const Circular: React.FC<CircularProps> = (props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Typography
        variant="caption"
        component="div"
        sx={{
          color: 'text.secondary',
          fontSize: '1rem',
          position: 'absolute',
          //top: '10%',
          //left: '50%',
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
            color: '#fdf626',
          }}
          {...props} // 型安全のために具体的なプロパティに制限がある場合は、propsを指定する
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
