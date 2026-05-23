import {
  Box,
  Typography,
  IconButton
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 3,
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      {/* Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 1
        }}
      >
        {/* Email */}
        <IconButton
          component="a"
          href="mailto:nukiasupport@gmail.com"
          target="_blank"
          sx={{
            color: "gray",
            transition: "0.3s",
            "&:hover": {
              color: "#fff"
            }
          }}
        >
          <EmailIcon />
        </IconButton>

        {/* WhatsApp */}
        <IconButton
          component="a"
          href="https://wa.me/255768174044"
          target="_blank"
          sx={{
            color: "gray",
            transition: "0.3s",
            "&:hover": {
              color: "#25D366"
            }
          }}
        >
          <WhatsAppIcon />
        </IconButton>

        {/* Instagram */}
        <IconButton
          component="a"
          href="https://www.instagram.com/nukia_online?igsh=YzBqaTdrazdhbGdk"
          target="_blank"
          sx={{
            color: "gray",
            transition: "0.3s",
            "&:hover": {
              color: "#E1306C"
            }
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>

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