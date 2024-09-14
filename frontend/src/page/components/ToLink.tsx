//ToLink
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


interface ToLinkProps {
  CompanyLink: string;
  BlackRate: number;
}

const ToLink: React.FC<ToLinkProps> = ({ CompanyLink ,BlackRate }) => {

  const LinkHref = `/information?CompanyLink=${encodeURIComponent(CompanyLink)}&BlackRate=${encodeURIComponent(BlackRate)}`;


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