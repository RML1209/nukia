import IconButton from "@mui/material/IconButton";
import LanguageIcon from '@mui/icons-material/Language';

const LanguageToggle = ({ lang, setLang }) => {
  return (
    <IconButton
      onClick={() => setLang(lang === "en" ? "sw" : "en")}
      color="inherit"
    >
      <LanguageIcon />
    </IconButton>
  );
};

export default LanguageToggle;