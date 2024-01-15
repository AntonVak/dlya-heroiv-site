import { ThemeProvider } from "@mui/system";
import { CssBaseline, Container } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./themeGlobal";

import OurPartners from "./components/OurPartners";
import AfterVictory from "./components/AfterVictory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Container maxWidth="lg" sx={{ padding: "0 70px !important" }}>
        <CssBaseline />
        <App />
      </Container> */}
      <CssBaseline />
        <App />
      <OurPartners />
      <AfterVictory />
    </ThemeProvider>
  </React.StrictMode>
);
