import { TextField, InputAdornment,  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const SearchBar = ({ value, setValue }) => {
  return (
    
    <TextField
      fullWidth
      placeholder="Search perfume..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      
    
    />
      );
    };

export default SearchBar;