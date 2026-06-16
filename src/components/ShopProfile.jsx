import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Button,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import API from "../api/axios";

function ShopProfile() {
  const { id } = useParams();

  const [shop, setShop] = useState(null);

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const response = await API.get(
          `shops/${id}/`
        );

        setShop(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShop();
  }, [id]);

  if (!shop) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">

      {/* HEADER */}

      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <Avatar
          src={shop.profile_image}
          alt={shop.name}
          sx={{
            width: 120,
            height: 120,
            mx: "auto",
            mb: 2,
            border:
              "3px solid #C8A96B",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            {shop.name}
          </Typography>

          {shop.is_verified && (
            <VerifiedIcon
              sx={{
                color: "#C8A96B",
              }}
            />
          )}
        </Box>

        <Typography
          sx={{
            mt: 2,
            color: "gray",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          {shop.description}
        </Typography>

        {/* INFO */}

        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Chip
            icon={
              <LocationOnOutlinedIcon />
            }
            label={shop.location}
          />

          <Chip
            icon={
              <PhoneOutlinedIcon />
            }
            label={shop.phone}
          />
        </Box>

        {/* INSTAGRAM */}

        {shop.instagram && (
          <Button
            startIcon={
              <InstagramIcon />
            }
            href={shop.instagram}
            target="_blank"
            sx={{
              mt: 3,
              color: "#C8A96B",
              borderColor:
                "#C8A96B",
            }}
            variant="outlined"
          >
            Visit Instagram
          </Button>
        )}
      </Box>

      {/* PRODUCTS */}

      <Typography
        variant="h5"
        sx={{
          mb: 3,
          color: "#C8A96B",
          fontWeight: 700,
        }}
      >
        Products
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(250px,1fr))",
          gap: 3,
          mb: 6,
        }}
      >
        {shop.products.map(
          (product) => (
            <Card
              key={product.id}
              sx={{
                borderRadius: 3,
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={
                  product.product_image
                }
                alt={
                  product.product_name
                }
              />

              <CardContent>
                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {product.product_name}
                </Typography>

                <Typography
                  sx={{
                    color: "#C8A96B",
                    fontWeight: 700,
                    mt: 1,
                  }}
                >
                  {Number(
                    product.product_price
                  ).toLocaleString()}{" "}
                  TZS
                </Typography>

                <Button
                  fullWidth
                  startIcon={
                    <ShoppingBagOutlinedIcon />
                  }
                  sx={{
                    mt: 2,
                  }}
                  variant="contained"
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          )
        )}
      </Box>

    </Container>
  );
}

export default ShopProfile;