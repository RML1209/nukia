import {
  Box,
  Typography
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 3,
        textAlign: "center",
        borderTop:
          "1px solid rgba(255,255,255,0.08)"
      }}
    >

      <Typography
        sx={{
          color: "gray",
          fontSize: "0.9rem",
          letterSpacing: 1
        }}
      >
        © 2026 NUKIA — Designed & Developed by caston_dev
      </Typography>

    </Box>
  );
};

export default Footer;