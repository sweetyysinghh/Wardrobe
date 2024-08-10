import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PieChart = () => {
  const theme = useTheme();
  const colors = {
    red: "#FF6347",   // Tomato
    blue: "#1E90FF",  // DodgerBlue
    green: "#3CB371", // MediumSeaGreen
    yellow: "#FFD700",// Gold
    orange: "#FFA500",// Orange
    purple: "#6A5ACD",// SlateBlue
    pink: "#FFB6C1",  // LightPink
  };

  const mockPieData = [
    { id: "red", label: "Red", value: 15, color: colors.red },
    { id: "blue", label: "Blue", value: 20, color: colors.blue },
    { id: "green", label: "Green", value: 25, color: colors.green },
    { id: "yellow", label: "Yellow", value: 30, color: colors.yellow },
    { id: "orange", label: "Orange", value: 35, color: colors.orange },
    { id: "purple", label: "Purple", value: 10, color: colors.purple },
    { id: "pink", label: "Pink", value: 5, color: colors.pink },
  ];

  return (
    <ResponsivePie
      data={mockPieData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey ? colors.grey[100] : "#FFF",
            },
          },
          legend: {
            text: {
              fill: colors.grey ? colors.grey[100] : "#FFF",
            },
          },
          ticks: {
            line: {
              stroke: colors.grey ? colors.grey[100] : "#FFF",
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey ? colors.grey[100] : "#FFF",
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey ? colors.grey[100] : "#FFF",
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey ? colors.grey[100] : "#FFF"}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      colors={({ id }) => colors[id]}
    />
  );
};

export default PieChart;
