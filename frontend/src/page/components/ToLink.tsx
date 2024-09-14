//ToLink
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


interface ToLinkProps {
  corporation_id: number;
}

const ToLink: React.FC<ToLinkProps> = ({ corporation_id }) => {

  const LinkHref = `/information?corporation_id=${encodeURIComponent(corporation_id)}`;


  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
    >
      <Link href={LinkHref}>詳細はこちら</Link>
    </Box>
  );
};

export default ToLink;