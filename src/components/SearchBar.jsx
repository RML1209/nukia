import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, setValue }) => {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search perfumes"

      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                fontSize: 18,
                color: "#C8A96B",
              }}
            />
          </InputAdornment>
        ),
      }}

      sx={{
        "& .MuiInputBase-root": {
          borderRadius: 2,
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
        },

        "& input": {
          textAlign: "center",
          fontSize: "0.85rem",
          letterSpacing: "0.5px",
        },

        "& input::placeholder": {
          textAlign: "center",
          opacity: 0.6,
        },

        "& fieldset": {
          borderColor: "rgba(200,169,107,0.3)",
        },

        "&:hover fieldset": {
          borderColor: "#C8A96B",
        },

        "& .Mui-focused fieldset": {
          borderColor: "#C8A96B",
        },
      }}
    />
  );
};

export default SearchBar;