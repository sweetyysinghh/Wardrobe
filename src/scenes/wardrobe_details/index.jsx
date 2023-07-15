import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {  mockWardrobe } from "../../data/mock_data";
import Header from "../../components/Header";

const  Wardrobe_details = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "No_Compartments",
      headerName: "Compartments_Id",
      flex: 1,
    },
    {
      field: "Clothing_Type",
      headerName: "Clothing Type",
      flex: 1,
    },
    {
      field: "Clothing_Color",
      headerName: "Clothing Color",
      flex: 1,
    },
    {
      field: "Clothing_Brand",
      headerName: "Clothing Brand",
      flex: 1,
    },
    {
        field: "Accessories_Type",
        headerName: "Accessories Type",
        flex: 1,
      },
      {
        field: "Accessories_Color",
        headerName: "Accessories Color",
        flex: 1,
      },
      {
        field: "Seasonality",
        headerName: "Seasonality",
        flex: 1,
      },
        
      
  ];

  return (
    <Box m="20px">
      <Header title="My Wardrobe" subtitle="List of all Wardrobe Details" />
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
          checkboxSelection rows={mockWardrobe}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Wardrobe_details;