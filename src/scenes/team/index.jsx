import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam} from "../../data/mock_data";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Update fallback value for pinkAccent600 to pink color
  const greenAccent600 = colors.greenAccent ? colors.greenAccent[600] : '#00FF00';
  const pinkAccent600 = colors.pinkAccent ? colors.pinkAccent[600] : '#FF1493'; // Changed to pink
  const grey100 = colors.grey ? colors.grey[100] : '#FFFFFF';  // Example fallback

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Wardrobe Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "open"
                ? greenAccent600
                : pinkAccent600
            }
            borderRadius="4px"
          >
            {access === "open" ? (
              <LockOpenOutlinedIcon />
            ) : (
              <LockOutlinedIcon />
            )}
            <Typography color={grey100} sx={{ ml: "5px" }}>
              {access === "open" ? "Open" : "Closed"}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="FRIENDS" subtitle="Friends and their Wardrobe Access" />
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
            color: colors.greenAccent ? colors.greenAccent[300] : '#00FF00',
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent ? colors.blueAccent[700] : '#0000FF',
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary ? colors.primary[400] : '#CCCCCC',
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent ? colors.blueAccent[700] : '#0000FF',
          },
          "& .MuiCheckbox-root": {
            color: colors.greenAccent ? `${colors.greenAccent[200]} !important` : '#00FF00',
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
