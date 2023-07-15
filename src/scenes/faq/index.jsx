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
          What is a wardrobe management system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A wardrobe management system is a software or application designed to help individuals organize, track, and manage their clothing and accessories inventory. It provides features such as cataloging items, creating outfits, tracking usage, and planning for different occasions.

  







          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can a wardrobe management system benefit me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A wardrobe management system can bring several benefits, including efficient organization of your wardrobe, saving time in choosing outfits, avoiding duplicate purchases, tracking clothing usage, discovering new outfit combinations, and maximizing the utility of your wardrobe.

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
          Yes, most wardrobe management systems allow customization of attributes and categories according to individual preferences. You can create your own labels, categorize clothing items by type, color, brand, seasonality, and add additional attributes like colour,brand and many more.
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
          Yes, wardrobe management systems often provide features to plan and organize outfits. You can create and save outfit combinations, tag them with occasions or events, and track their usage to avoid repeating the same outfits frequently.
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How secure is the data stored in a wardrobe management system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Data security is an important aspect of any software system, including wardrobe management systems. Reputable systems prioritize user data privacy and employ industry-standard security measures. It is advisable to choose a system with data encryption, secure authentication, and regular backups to ensure the safety of your information.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;