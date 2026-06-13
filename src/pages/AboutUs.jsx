import {
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            color: "#C8A96B",
            mb: 2,
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography
          variant="h4"
          sx={{
            color: "#C8A96B",
            mb: 3,
            fontFamily:
              "Playfair Display, serif",
          }}
        >
          About Nukia
        </Typography>

        <Typography
          sx={{
            color: "gray",
            lineHeight: 2,
          }}
        >
          Nukia is a perfume discovery
          platform that helps customers
          find trusted perfume shops
          across Tanzania.

          Our mission is to connect
          perfume lovers with authentic
          sellers while helping local
          businesses grow online.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutUs;