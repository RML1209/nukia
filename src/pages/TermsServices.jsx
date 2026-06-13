import {
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

function TermsServices() {
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
          }}
        >
          Terms & Services
        </Typography>

        <Typography
          sx={{
            color: "gray",
            lineHeight: 2,
          }}
        >
          By using Nukia, you agree
          to our terms and conditions.

          Sellers are responsible
          for the accuracy of their
          products, descriptions,
          and pricing.
        </Typography>
      </Box>
    </Container>
  );
}

export default TermsServices;