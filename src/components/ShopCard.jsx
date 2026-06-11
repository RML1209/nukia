import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Avatar,
  Box,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
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
          borderRadius: 1.5,
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "0.3s ease",

          "&:hover": {
            transform: "translateY(-2px)",
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
 fontFamily: "Inter, sans-serif",                
                  textAlign: "left",
                  fontWeight: 600,
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
              mt: 1,
              color: "gray",
              lineHeight: 1.8,
              fontSize: "0.96rem",
            }}
          >
            {shop.description}
          </Typography>

{/* ================= PRODUCT GALLERY ================= */}

{shop.products?.length > 0 && (
  <Box sx={{ mt: 2 }}>
    <Typography
      sx={{
        color: "#C8A96B",
        mb: 1.5,
        fontWeight: 600,
        fontSize: "0.95rem",
      }}
    >
      All Products
    </Typography>

<Box>
    <Stack
      direction="row"
      spacing={2}
      sx={{
        overflowX: "auto",
        pb: 1,

        "&::-webkit-scrollbar": {
          height: 1,
        },

        "&::-webkit-scrollbar-thumb": {
          background: "rgba(200,169,107,0.4)",
          borderRadius: "20px",
        },
      }}
    >
      {shop.products.map((product) => (
        <Box
          key={product.id}
          sx={{
            minWidth: 120,
            textAlign: "center",
          }}
        >
          {product.product_image ? (
            <Box
              component="img"
              src={product.product_image}
              alt={product.product_name}
              sx={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 1,
                border:
                  "1px solid rgba(255,255,255,0.1)",

                transition: "0.3s ease",

                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          ) : (
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "rgba(255,255,255,0.05)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <ImageIcon
                sx={{
                  color: "#C8A96B",
                  fontSize: 40,
                }}
              />
            </Box>
          )}



<Typography
  sx={{
    mt: 1,
    color: "#C8A96B",
    fontSize: "0.85rem",
    fontWeight: 600,
    maxWidth: 120,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderRadius: 2,
    
  }}
>
  {product.product_name}
</Typography>

{product.product_price > 0 && (
  <Box
    sx={{
      mt: 0.8,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      px: 1.2,
      py: 0.4,
      borderRadius: 2,
      background: "rgba(200,169,107,0.12)",
      border: "1px solid rgba(200,169,107,0.25)",
      backdropFilter: "blur(10px)",
    }}
  >
    <Typography
      sx={{
        color: "#C8A96B",
        fontWeight: 700,
        fontSize: "0.78rem",
      }}
    >
      TZS {Number(product.product_price).toLocaleString()}
    </Typography>
  </Box>
)}

        </Box>
      ))}
    </Stack>
  </Box>
  </Box>
)}

          {/* ================= PRODUCT TAGS ================= */}

          {/* <Stack
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

          </Stack> */}

        {/* ================= ACTION BUTTONS ================= */}

<Stack
  direction="row"
  spacing={2}
  justifyContent="center"
  sx={{ mt: 2 }}
>
  {/* WHATSAPP */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
    }}
  >
    <Button
      variant="contained"
      href={`https://wa.me/${shop.phone}?text=${encodeURIComponent(
        whatsappMessage
      )}`}
      target="_blank"
      sx={{
        minWidth: 50,
        width: 50,
        height: 50,
        borderRadius: "50%",
        p: 0,
          "&:hover": {
      backgroundColor: "#25D366",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(37,211,102,0.4)",
    },
      }}
    >
      <WhatsAppIcon fontSize="small" />
    </Button>

    <Typography
      sx={{
        mt: 0.5,
        fontSize: "0.65rem",
        textAlign: "center",
        color: "text.secondary",
      }}
    >
      Chat on WhatsApp
    </Typography>
  </Box>

  {/* CALL */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
    }}
  >
    <Button
      variant="outlined"
      href={`tel:${shop.phone}`}
      sx={{
        minWidth: 50,
        width: 50,
        height: 50,
        borderRadius: "50%",
        p: 0,
         "&:hover": {
      backgroundColor: "#1976d2",
      color: "#fff",
      borderColor: "#1976d2",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(25,118,210,0.4)",
    },
      }}
    >
      <CallIcon fontSize="small" />
    </Button>

    <Typography
      sx={{
        mt: 0.5,
        fontSize: "0.65rem",
        textAlign: "center",
        color: "text.secondary",
      }}
    >
      Call Shop
    </Typography>
  </Box>

  {/* INSTAGRAM */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
    }}
  >
    <Button
      variant="outlined"
      href={shop.instagram}
      target="_blank"
      sx={{
        minWidth: 50,
        width: 50,
        height: 50,
        borderRadius: "50%",
        p: 0,
        "&:hover": {
      background:
        "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
      color: "#fff",
      borderColor: "transparent",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(221,42,123,0.4)",
    },
      }}
    >
      <InstagramIcon fontSize="small" />
    </Button>

    <Typography
      sx={{
        mt: 0.5,
        fontSize: "0.65rem",
        textAlign: "center",
        color: "text.secondary",
      }}
    >
      View Instagram
    </Typography>
  </Box>
</Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ShopCard;