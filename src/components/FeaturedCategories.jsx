import {
  Box,
  Chip,
} from "@mui/material";

function FeaturedCategories({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        gap: 1,
        overflowX: "auto",
        pb: 1,

        "&::-webkit-scrollbar": {
          height: "4px",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "rgba(200,169,107,0.4)",
          borderRadius: "20px",
        },
      }}
    >
      {/* ALL */}

      <Chip
        label="All"
        clickable
        onClick={() =>
          setSelectedCategory(null)
        }
        sx={{
          background:
            selectedCategory === null
              ? "#C8A96B"
              : "rgba(200,169,107,0.4)",

          color:
            selectedCategory === null
              ? "#000"
              : "#000",

          fontWeight: 600,

          whiteSpace: "nowrap",
        }}
      />

      {categories.map((category) => (
        <Chip
          key={category.id}
          label={category.name}
          clickable
          onClick={() =>
            setSelectedCategory(
              category.slug
            )
          }
          sx={{
            background:
              selectedCategory ===
              category.slug
                ? "#C8A96B"
                : "rgba(200,169,107,0.4)",

            color:
              selectedCategory ===
              category.slug
                ? "#000"
                : "#000",
            fontWeight: 600,

            whiteSpace: "nowrap",

            transition: "0.3s",

            "&:hover": {
              background:
                "#C8A96B",
              color: "#000",
            },
          }}
        />
      ))}
    </Box>
  );
}

export default FeaturedCategories;