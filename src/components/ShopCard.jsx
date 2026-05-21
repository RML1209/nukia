import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
  Avatar,
  Box,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { motion } from "framer-motion";

const ShopCard = ({ shop, language }) => {

  // ================= WHATSAPP AUTO MESSAGE =================

  const whatsappMessage =
    language === "sw"
      ? `Habari, nimeona duka lako kwenye nukia.online. Je, una perfume za kuniuzia?`
      : `Hi, I searched your shop on nukia.online website. Do you have perfume to sell to me?`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        sx={{
          mb: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "0.3s ease",

          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardContent>

          {/* ================= SHOP HEADER ================= */}

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >

            {/* PROFILE IMAGE */}

            <Avatar
              src={shop.profile_image}
              alt={shop.name}
              sx={{
                width: 50,
                height: 50,
                border: "2px solid #C8A96B",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.25)",
              }}
            />

            {/* SHOP DETAILS */}

            <Box>

              {/* SHOP NAME */}

              <Typography
                variant="h5"
                sx={{
                  fontFamily:
                    "Playfair Display, serif",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                {shop.name}
              </Typography>

              {/* LOCATION */}

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                flexWrap="wrap"
                sx={{ mt: 0.5 }}
              >

                <LocationOnIcon
                  fontSize="small"
                  sx={{ color: "#C8A96B" }}
                />

                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "0.95rem",
                  }}
                >
                  {shop.location}
                </Typography>

                {/* VIEW LOCATION BUTTON */}

                <Button
                  variant="outlined"
                  size="small"
                  endIcon={<OpenInNewIcon />}
                  href={shop.map_link}
                  target="_blank"
                  sx={{
                    textTransform: "none",
                    minWidth: "auto",
                    fontSize: "0.65rem",
                    color: "#C8A96B",
                    px: 1,
                    py: 0.2,
                  }}
                >
                  View Location
                </Button>

              </Stack>

            </Box>

          </Stack>

          {/* ================= SHOP DESCRIPTION ================= */}

          <Typography
            sx={{
              mt: 2.5,
              color: "gray",
              lineHeight: 1.8,
              fontSize: "0.96rem",
            }}
          >
            {shop.description}
          </Typography>

          {/* ================= PRODUCT TAGS ================= */}

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 2.5,
              flexWrap: "wrap",
              gap: 1,
            }}
          >

            {shop.products?.map((product, index) => (
              <Chip
                key={index}
                label={product.product_name}
                size="small"
                sx={{
                  borderRadius: 2,
                  background:
                    "rgba(200,169,107,0.12)",

                  color: "#C8A96B",

                  border:
                    "1px solid rgba(200,169,107,0.25)",
                }}
              />
            ))}

          </Stack>

          {/* ================= ACTION BUTTONS ================= */}

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={1.5}
            sx={{ mt: 3 }}
          >

            {/* WHATSAPP */}

            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${shop.phone}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              sx={{
                borderRadius: 3,
                textTransform: "none",
                py: 1,
              }}
            >
              WhatsApp
            </Button>

            {/* CALL */}

            <Button
              variant="outlined"
              startIcon={<CallIcon />}
              href={`tel:${shop.phone}`}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                py: 1,
              }}
            >
              Call
            </Button>

            {/* INSTAGRAM */}

            <Button
              variant="outlined"
              startIcon={<InstagramIcon />}
              href={shop.instagram}
              target="_blank"
              sx={{
                borderRadius: 3,
                textTransform: "none",
                py: 1,
              }}
            >
              Instagram
            </Button>

          </Stack>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ShopCard;