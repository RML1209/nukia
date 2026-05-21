import {
  Select,
  MenuItem,
  InputAdornment
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationSelect = ({
  location,
  setLocation,
  locations
}) => {

  return (

    <Select
      fullWidth
      value={location}
      onChange={(e) =>
        setLocation(e.target.value)
      }

      displayEmpty

      startAdornment={
        <InputAdornment position="start">
          <LocationOnIcon />
        </InputAdornment>
      }

      sx={{
        borderRadius: 3
      }}
    >

      {/* ALL LOCATIONS */}

      <MenuItem value="all">
        All Locations
      </MenuItem>

      {/* DYNAMIC LOCATIONS */}

      {locations.map((loc, index) => (

        <MenuItem
          key={index}
          value={loc}
        >
          {loc}
        </MenuItem>

      ))}

    </Select>

  );

};

export default LocationSelect;