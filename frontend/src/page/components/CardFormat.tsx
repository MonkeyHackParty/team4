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
  corporation_id?: number;
  AccordionContent?: string;
  BlackRate: number;
}

const CardFormat: React.FC<CardFormatProps> = ({ Name, corporation_id, AccordionContent, BlackRate }) => {
    function Comment(Rate: number): string{ 
      if (0 <= Rate && Rate < 20) return "この企業は安心っすね。";
      if (20 <= Rate && Rate < 40) return "この企業はまぁ、大丈夫っしょ。";
      if (40 <= Rate && Rate < 60) return "この企業は大変だけど...。まぁがんばれ。";
      if (60 <= Rate && Rate < 80) return "この企業はまっずい。";
      if (80 <= Rate && Rate <= 100) return "生きて帰ってこれますか？";
      return "謎に包まれている..."
    }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '32.2%', marginTop:7 }}>
      <Card sx={{ minWidth: 275, width: '100%', display: 'flex', flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
        <Box sx={{ flex: 1, padding: 2 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              BlackCheckerCard
            </Typography>
            <Typography variant="h5" component="div">
              {Name}
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary', mb: 1.5 }}>
              {corporation_id && <ToLink corporation_id={corporation_id} />}
            </Typography>
          </CardContent>
          <CardActions>
            {AccordionContent && <AccordionFormat content={Comment(BlackRate)} />}
          </CardActions>
        </Box>
        <Box sx={{ width: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '10%', mr: '5%' }}>
          <Circular value={BlackRate ?? 'No Data'} />
        </Box>
      </Card>
    </Box>
  );
};

export default CardFormat;