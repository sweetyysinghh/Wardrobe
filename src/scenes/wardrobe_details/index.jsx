import React, { useContext } from 'react';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockWardrobe } from '../../data/mock_data'; // Importing the mock data
import Header from '../../components/Header';
import { tokens } from '../../theme'; // Import tokens from theme.js

const WardrobeDetails = () => {
  const theme = useTheme();  // Use the theme hook
  const colors = tokens(theme.palette.mode);  // Get the color tokens based on the theme

  const columns = [
    { field: 'Date', headerName: 'Date', width: 150 },
    { field: 'No_Compartments', headerName: 'Compartments', width: 150 },
    { field: 'Clothing_Type', headerName: 'Clothing Type', width: 150 },
    { field: 'Clothing_Color', headerName: 'Clothing Color', width: 150 },
    { field: 'Clothing_Brand', headerName: 'Clothing Brand', width: 150 },
    { field: 'Accessories_Type', headerName: 'Accessories Type', width: 150 },
    { field: 'Accessories_Color', headerName: 'Accessories Color', width: 150 },
    { field: 'Seasonality', headerName: 'Seasonality', width: 150 },
  ];

  return (
    <Box m="20px">
      <Header title="My Wardrobe" subtitle="Personalized Wardrobe Details" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockWardrobe}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default WardrobeDetails;
