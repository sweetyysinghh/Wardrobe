import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";

// Import images from the images folder
import img1 from '../../images/image1.png'; 
import img2 from '../../images/image2.png'; 
import img3 from '../../images/image3.png';
import img4 from '../../images/image4.png';

const Wardrobe_Management_System = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Personalized Fashion Chronicle" subtitle="Effortlessly Organize and Optimize Your Closet" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* IMAGE GRID CENTERED */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"  
      >
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={3} 
        >
          <Box
            component="img"
            src={img1}
            alt="Image 1"
            sx={{ width: '200px', height: '200px', objectFit: 'cover' }} 
          />
          <Box
            component="img"
            src={img2}
            alt="Image 2"
            sx={{ width: '200px', height: '200px', objectFit: 'cover' }}  
          />
           <Box
            component="img"
            src={img4}
            alt="Image 4"
            sx={{ width: '200px', height: '200px', objectFit: 'cover' }} 
          />
          <Box
            component="img"
            src={img3}
            alt="Image 3"
            sx={{ width: '200px', height: '200px', objectFit: 'cover' }}  
          />
         
        </Box>
      </Box>
    </Box>
  );
};

export default Wardrobe_Management_System;
