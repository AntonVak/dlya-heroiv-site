import { ThemeProvider } from "@mui/system";
import { CssBaseline} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./themeGlobal";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
