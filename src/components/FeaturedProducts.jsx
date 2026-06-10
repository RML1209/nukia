import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";

function FeaturedProducts({
  products,
}) {
  // =========================
  // EMPTY STATE
  // =========================

  if (!products?.length) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
        }}
      >
        <Typography
          sx={{
            color: "gray",
          }}
        >
          Select a category to view perfumes
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 5 }}>
      {/* =========================
          SECTION TITLE
      ========================= */}

      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "#C8A96B",
          fontFamily:
            "Playfair Display, serif",
          fontWeight: 600,
        }}
      >
        Featured Perfumes
      </Typography>

      {/* =========================
          PRODUCTS SCROLLER
      ========================= */}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 1,

          "&::-webkit-scrollbar": {
            height: "5px",
          },

          "&::-webkit-scrollbar-thumb": {
            background:
              "rgba(200,169,107,0.4)",
            borderRadius: "20px",
          },
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              minWidth: 220,
              maxWidth: 220,

              borderRadius: 3,

              background:
                "rgba(255,255,255,0.03)",

              backdropFilter:
                "blur(12px)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              overflow: "hidden",

              transition:
                "all 0.3s ease",

              "&:hover": {
                transform:
                  "translateY(-6px)",

                border:
                  "1px solid rgba(200,169,107,0.3)",
              },
            }}
          >
            {/* =========================
                PRODUCT IMAGE
            ========================= */}

            {product.product_image ? (
              <Box
                component="img"
                src={
                  product.product_image
                }
                alt={
                  product.product_name
                }
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",

                  transition:
                    "0.4s ease",

                  "&:hover": {
                    transform:
                      "scale(1.05)",
                  },
                }}
              />
            ) : (
              <Box
                sx={{
                  height: 180,

                  display: "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  background:
                    "rgba(255,255,255,0.05)",
                }}
              >
                <ImageIcon
                  sx={{
                    fontSize: 50,
                    color: "#C8A96B",
                  }}
                />
              </Box>
            )}

            {/* =========================
                PRODUCT DETAILS
            ========================= */}

            <CardContent>
              {/* PRODUCT NAME */}

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",

                  overflow: "hidden",
                  textOverflow:
                    "ellipsis",
                  whiteSpace:
                    "nowrap",
                }}
              >
                {product.product_name}
              </Typography>

              {/* PRODUCT PRICE */}

              <Typography
                sx={{
                  color: "#C8A96B",
                  fontWeight: 700,
                  mt: 0.5,
                }}
              >
                TZS{" "}
                {Number(
                  product.product_price
                ).toLocaleString()}
              </Typography>

              {/* SHOP NAME */}

              <Typography
                sx={{
                  color: "gray",
                  fontSize: "0.85rem",
                  mt: 1,
                }}
              >
                {product.shop_name}
              </Typography>

              {/* PRODUCT CATEGORY */}

              <Typography
                sx={{
                  color: "#999",
                  fontSize: "0.75rem",
                  mt: 0.5,
                }}
              >
                {product.category}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default FeaturedProducts;