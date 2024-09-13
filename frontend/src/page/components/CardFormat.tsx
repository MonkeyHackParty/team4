//CardFormat
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Circular from './Circular';
import AccordionFormat from './AccordionFormat';
import ToLink from './ToLink';


interface CardFormatProps {
  Name: string;
  LinkCode?: string;
  AccordionContent?: string;
  BlackRate: number;
}

const CardFormat: React.FC<CardFormatProps> = ({ Name, LinkCode, AccordionContent, BlackRate }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '32.2%' }}>
      <Card sx={{ minWidth: 275, width: '100%', display: 'flex', flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
        <Box sx={{ flex: 1, padding: 2 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              BlackCheckerCard
            </Typography>
            <Typography variant="h5" component="div">
              {Name}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {LinkCode && <ToLink CompanyLink={LinkCode} />}
            </Typography>
          </CardContent>
          <CardActions>
            {AccordionContent && <AccordionFormat content={AccordionContent} />}
          </CardActions>
        </Box>
        <Box sx={{ width: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '10%', mr: '5%' }}>
          <Circular value={BlackRate} />
        </Box>
      </Card>
    </Box>
  );
};

export default CardFormat;