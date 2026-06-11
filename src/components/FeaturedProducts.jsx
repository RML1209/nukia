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
          mb: 2,
        }}
      >
        <Typography
          sx={{
            color: "gray",
          }}
        >
          Select a category above to view perfumes
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 2 }}>
      {/* =========================
          SECTION TITLE
      ========================= */}

      <Typography
        sx={{
          mb: 1.4,
          color: "#C8A96B",
        
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        Featured Perfumes category
      </Typography>

      {/* =========================
          PRODUCTS SCROLLER
      ========================= */}

      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          overflowX: "auto",
        

          "&::-webkit-scrollbar": {
            height: 1,
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
              
              width:120,
              borderRadius: 1,
              
 flexShrink: 0,
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
                  "translateY(-1px)",

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
                  height: 80,
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

            <CardContent   sx={{
    p: 0.5,
    "&:last-child": {
      pb: 0.5,
    },
  }}>
              {/* PRODUCT NAME */}

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "0.7rem",
                   lineHeight: 1.1,

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
                   fontSize: "0.68rem",
                  color: "#C8A96B",
                  fontWeight: 700,
                  mt: 0.2,
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
                  fontSize: "0.68rem",
                  mt: 0.2,
                }}
              >
                {product.shop_name}
              </Typography>

              {/* PRODUCT CATEGORY */}

              <Typography
                sx={{
                  color: "#999",
                  fontSize: "0.55rem",
                  mt: 0.1,
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