import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface AccordionFormatProps {
  content: string;
}

const AccordionFormat: React.FC<AccordionFormatProps> = ({ content }) => {
  return (
    <div className="centered-content">
      <Accordion sx={{ width: '150px', maxWidth: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>企業に一言</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionFormat;
