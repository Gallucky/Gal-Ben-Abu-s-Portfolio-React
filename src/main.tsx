import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: { primary: { main: "#36454f" }, secondary: { main: "#252525" }, background: "" },
    typography: {
        h1: { fontSize: "3rem", fontWeight: 600 },
        h2: { fontSize: "2rem", fontWeight: 600 },
        h3: { fontSize: "1.5rem", fontWeight: 600 },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
