import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#C8A96B"
      },

      background: {
        default:
          mode === "dark"
            ? "#0F0F0F"
            : "#F5F5F5",

        paper:
          mode === "dark"
            ? "#1A1A1A"
            : "#FFFFFF"
      },

      text: {
        primary:
          mode === "dark"
            ? "#F5F5F5"
            : "#111111"
      }
    },

    typography: {
      fontFamily: "Inter, sans-serif",

      h1: {
        fontFamily:
          "Didot, Playfair Display, serif"
      },

      h2: {
        fontFamily:
          "Didot, Playfair Display, serif"
      },

      h3: {
        fontFamily:
          "Playfair Display, serif"
      },

      h4: {
        fontFamily:
          "Playfair Display, serif"
      },

      h5: {
        fontFamily:
          "Playfair Display, serif"
      },

      h6: {
        fontFamily:
          "Playfair Display, serif"
      }
    },

    shape: {
      borderRadius: 16
    }
  });