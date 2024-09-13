import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// CompanyLink の型定義
interface ToLinkProps {
  CompanyLink: string;
}

// preventDefault 関数に型を指定
const preventDefault = (event: React.MouseEvent) => event.preventDefault();

const ToLink: React.FC<ToLinkProps> = ({ CompanyLink }) => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href={CompanyLink}>詳細はこちら</Link>
    </Box>
  );
};

export default ToLink;
