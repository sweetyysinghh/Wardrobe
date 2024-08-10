import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BudgetTracking from "../../components/BudgetTracking";
import StylingTips from "../../components/StylingTips";
import OutfitHistory from "../../components/OutfitHistory";

const BudgetStylingHistory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Wardrobe Insights" subtitle="Budget Tracking, Styling Tips & Outfit History" />
      <Grid container spacing={3}>
        {/* Budget Tracking Section */}
        <Grid item xs={12} md={4}>
          <Box
            p="20px"
            height="75vh"
            sx={{
              backgroundColor: colors.primary[400],
              borderRadius: "8px",
              overflow: "auto",
            }}
          >
            <BudgetTracking />
          </Box>
        </Grid>

        {/* Styling Tips Section */}
        <Grid item xs={12} md={4}>
          <Box
            p="20px"
            height="75vh"
            sx={{
              backgroundColor: colors.primary[400],
              borderRadius: "8px",
              overflow: "auto",
            }}
          >
            <StylingTips />
          </Box>
        </Grid>

        {/* Outfit History Section */}
        <Grid item xs={12} md={4}>
          <Box
            p="20px"
            height="75vh"
            sx={{
              backgroundColor: colors.primary[400],
              borderRadius: "8px",
              overflow: "auto",
            }}
          >
            <OutfitHistory />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BudgetStylingHistory;
