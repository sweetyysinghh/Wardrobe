import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the wardrobe management system developed by Sweety Singh?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The wardrobe management system developed by Sweety Singh includes several features:
            <ul>
              <li><strong>Color Palette:</strong> Demonstrates the colors of the clothes in the wardrobe in the form of a pie chart.</li>
              <li><strong>Calendar Integration:</strong> Allows for daily planning and scheduling.</li>
              <li><strong>Tabular Section:</strong> Displays clothes with details such as compartment, brand, seasonality, ID, name, compartments, clothing type, color, and accessories.</li>
              <li><strong>Budget Tracking:</strong> Helps manage and track your clothing budget.</li>
              <li><strong>Styling Tips:</strong> Provides fashion advice and styling suggestions.</li>
              <li><strong>Outfit History Page:</strong> Keeps a record of outfits worn.</li>
              
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can this wardrobe management system benefit me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This system helps you efficiently organize your wardrobe, save time choosing outfits, avoid duplicate purchases, track clothing usage, discover new outfit combinations, and maximize your wardrobe's utility.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I customize the attributes and categories in the wardrobe management system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the system allows customization of attributes and categories according to your preferences. You can adjust labels, categorize items by type, color, brand, seasonality, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is it possible to plan outfits and track their usage in the wardrobe management system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the system includes features to plan and organize outfits. You can create and save outfit combinations, tag them for occasions, and track their usage.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How secure is the data stored in the wardrobe management system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The system prioritizes data security with measures like encryption, secure authentication, and regular backups. Choosing a reputable system ensures the safety of your information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
};

export default FAQ;
