import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Wardrobe_Management_System from "./scenes/Wardrobe_Management_System";
import Team from "./scenes/team";
import Wardrobe_details from "./scenes/wardrobe_details";
import Contacts from "./scenes/contacts";
import BudgetTrackingStylingHistory  from "./scenes/budgetstylinghistory";

import Form from "./scenes/form";

import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Wardrobe_Management_System />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/wardrobe_details" element={<Wardrobe_details />} />
              <Route path="/form" element={<Form />} />
             
              <Route path="/pie" element={<Pie />} />
              <Route path="/budgetstylinghistory" element={<BudgetTrackingStylingHistory />} />
              
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;