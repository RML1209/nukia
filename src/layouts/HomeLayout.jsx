import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { motion } from "framer-motion";

import LanguageToggle from "../components/LanguageToggle";

const HomeLayout = ({
  children,
  mode,
  setMode,
  language,
  setLanguage,
  title,
  subtitle
}) => {
  return (
    <>

      {/* NAVBAR */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
      >
        <Toolbar>

          {/* LOGO */}
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily:
                "Didot, Playfair Display, serif",
              letterSpacing: 2,
              fontWeight: 600
            }}
          >
            NUKIA
          </Typography>

          {/* LANGUAGE TOGGLE */}
          <LanguageToggle
            lang={language}
            setLang={setLanguage}
          />

          {/* DARK/LIGHT MODE */}
          <IconButton
            color="inherit"
            onClick={() =>
              setMode(
                mode === "dark"
                  ? "light"
                  : "dark"
              )
            }
          >
            {mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Container
        sx={{
          mt: 10,
          textAlign: "center"
        }}
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
        >

          {/* MAIN TITLE */}
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 600,
              letterSpacing: 3
            }}
          >
            NUKIA
          </Typography>

          {/* SUBTITLE */}
          <Typography
            variant="h5"
            sx={{
              mb: 2
            }}
          >
            {title}
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              mb: 5,
              color: "gray",
              maxWidth: 600,
              margin: "0 auto"
            }}
          >
            {subtitle}
          </Typography>

        </motion.div>

        {/* PAGE CONTENT */}
        {children}

      </Container>

    </>
  );
};

export default HomeLayout;