import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UploadFile from "./components/UploadFile.js";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const defaultTheme = createTheme();

const EmployeeTable = lazy(() => import("./components/EmpTable.js"));

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div>
            <Navigation />
            <Routes>
              <Route exact path="/" element={<UploadFile />} />
              <Route exact path="/upload" element={<UploadFile />} />
              <Route
                exact
                path="/record"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <EmployeeTable />
                  </Suspense>
                }></Route>
            </Routes>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
