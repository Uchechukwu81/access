import {
  Stack,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";
// import { ExpandMoreIcon } from '@mui/icons-materialExpandMore';

// import AccordionQuestion from '../DashboardComponents/AccordionQuestion';

const Faq = () => {
  return (
    <Stack height={"100%"} justifyContent="space-between" py={2}>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // sx= {{border: '1px solid red', boxShadow: '3'}}
        >
          <Typography>
            "What is the purpose of this project?" "This project is to help you
            to get the knowledge of the project."
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            question="What is the purpose of this project?" answer="This project
            is to help you to get the knowledge of the project."
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            "What is the purpose of this project?" "This project is to help you
            to get the knowledge of the project."
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            question="What is the purpose of this project?" answer="This project
            is to help you to get the knowledge of the project."
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            "What is the purpose of this project?" "This project is to help you
            to get the knowledge of the project."
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            question="What is the purpose of this project?" answer="This project
            is to help you to get the knowledge of the project."
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box minHeight={40}>
        <Button
          my={2}
          variant="outlined"
          color="secondary"
          sx={{ alignSelf: "flex-start",  
          "&:hover": {
            backgroundColor: "#FF8102",
            color: "white",
            transition: "0.3s ease-in-out"
          }
        }}
        >
          View All
        </Button>
      </Box>
    </Stack>
  );
};

export default Faq;
