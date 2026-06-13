import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";


import {
  Container,
  Typography,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@mui/material";



import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import AboutUs from "./pages/AboutUs";
import TermsServices from "./pages/TermsServices";

import { ThemeProvider } from "@mui/material/styles";

import { motion } from "framer-motion";

import API from "./api/axios";

import SearchBar from "./components/SearchBar";
import LocationSelect from "./components/LocationSelect";
import ShopCard from "./components/ShopCard";
import LanguageToggle from "./components/LanguageToggle";
import Footer from "./components/Footer";
import FeaturedCategories from "./components/FeaturedCategories";
import FeaturedProducts from "./components/FeaturedProducts";


import { getTheme } from "./theme";
import { lang } from "./lang";

function App() {
const navigate = useNavigate();
  const [menuOpen, setMenuOpen] =
  useState(false);
  // =========================
  // CATEGORIES STATE
  // =========================
  const [categories, setCategories] =
  useState([]);

const [selectedCategory, setSelectedCategory] =
  useState(null);

const [featuredProducts, setFeaturedProducts] =
  useState([]);
  // =========================
  // SEARCH STATE
  // =========================

  const [search, setSearch] = useState("");

  // =========================
  // SHOPS DATA
  // =========================

  const [shops, setShops] = useState([]);

  // =========================
  // LOCATION FILTER
  // =========================

  const [location, setLocation] = useState("all");

  // =========================
  // DARK/LIGHT MODE
  // =========================

  const [mode, setMode] = useState("dark");

  // =========================
  // LANGUAGE
  // =========================

  const [language, setLanguage] = useState("en");

  // =========================
  // LOADING
  // =========================

  const [loading, setLoading] = useState(true);

  // =========================
  // THEME
  // =========================

  const theme = useMemo(() => getTheme(mode), [mode]);

  // =========================
  // TRANSLATIONS
  // =========================

  const t = lang[language];

   // =========================
  // ALL SHOPS
  // =========================
const [allShops, setAllShops] = useState([]);


 // =========================
  // FETCH CATEGORIES
  // =========================
useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response =
        await API.get("categories/");

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategories();
}, []);


 // =========================
  // FETCH CATEGORIES BY CATEGORIES
  // =========================
useEffect(() => {
  const fetchCategoryProducts =
    async () => {
      try {
        if (!selectedCategory) {
          setFeaturedProducts([]);
          return;
        }

        const response =
          await API.get(
            `categories/${selectedCategory}/`
          );

        setFeaturedProducts(
          response.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  fetchCategoryProducts();
}, [selectedCategory]);
  // =========================
  // FETCH SHOPS + SEARCH
  // =========================

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);

        let response;

        // FETCH ALL SHOPS
        if (search.trim() === "") {
          response = await API.get("shops/");
        }

        // SEARCH SHOPS
        else {
          response = await API.get(`shops/search/?q=${search}`);
        }

        // LOCATION FILTER
        let filteredShops = response.data;

        if (location !== "all") {
          filteredShops = response.data.filter((shop) =>
            shop.location.toLowerCase().includes(location.toLowerCase()),
          );
        }

        setAllShops(response.data);
        setShops(filteredShops);
      } catch (error) {
        console.log("Error fetching shops:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [search, location]);

const locations = [

  ...new Set(

    allShops.map(
      (shop) => shop.location
    )

  )

];
  return (
    <Routes>
      <Route path="/" element={
    <ThemeProvider theme={theme}>
      
      <div
        style={{
          minHeight: "100vh",
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          transition: "0.3s ease",
        }}
      >
        {/* ================= NAVBAR ================= */}

        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            {/* LOGO */}

           <Box
  sx={{
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    gap: 0.1,
  }}
>
  <IconButton
    color="inherit"
    onClick={() =>
      setMenuOpen(true)
    }
  >
    <MenuIcon sx={{mt:1}}/>
  </IconButton>

  <img
    src="/nukia_logo1.png"
    alt="NUKIA Logo"
    style={{
      height: "40px",
      width: "auto",
      objectFit: "contain",
    }}
  />
</Box>

            {/* LANGUAGE TOGGLE */}

            <LanguageToggle lang={language} setLang={setLanguage} />

            {/* DARK/LIGHT MODE */}

            <IconButton
              color="inherit"
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>

<Drawer
  anchor="left"
  open={menuOpen}
  onClose={() => setMenuOpen(false)}
  PaperProps={{
    sx: {
      width: 290,
      background:
        "linear-gradient(180deg,#0d0d0d 0%, #141414 100%)",
      color: "#fff",
      borderRight:
        "1px solid rgba(200,169,107,0.2)",
    },
  }}
>
  <Box
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* HEADER */}

    <Box
      sx={{
        p: 3,
        borderBottom:
          "1px solid rgba(200,169,107,0.15)",
      }}
    >
      <Typography
        sx={{
          color: "#C8A96B",
          fontSize: "1.4rem",
          fontWeight: 700,
          letterSpacing: 2,
          fontFamily:
            "Playfair Display, serif",
        }}
      >
        NUKIA
      </Typography>

      <Typography
        sx={{
          color: "gray",
          fontSize: "0.85rem",
          mt: 0.5,
        }}
      >
        Discover Premium Perfumes
      </Typography>
    </Box>

    {/* MENU */}

    <List sx={{ mt: 1 }}>

      <ListItemButton
  onClick={() => {
    navigate("/");
    setMenuOpen(false);
  }}
  sx={{
    mx: 1,
    borderRadius: 2,
    mb: 0.5,

    "&:hover": {
      background:
        "rgba(200,169,107,0.12)",
    },
  }}
>
  <ListItemIcon>
    <HomeRoundedIcon
      sx={{
        color: "#C8A96B",
      }}
    />
  </ListItemIcon>

  <ListItemText primary="Home" />
</ListItemButton>

     <ListItemButton
  onClick={() => {
    navigate("/about");
    setMenuOpen(false);
  }}
  sx={{
    mx: 1,
    borderRadius: 2,
    mb: 0.5,

    "&:hover": {
      background:
        "rgba(200,169,107,0.12)",
    },
  }}
>
  <ListItemIcon>
    <InfoOutlinedIcon
      sx={{
        color: "#C8A96B",
      }}
    />
  </ListItemIcon>

  <ListItemText primary="About Us" />
</ListItemButton>

      <ListItemButton
  onClick={() => {
    navigate("/terms");
    setMenuOpen(false);
  }}
  sx={{
    mx: 1,
    borderRadius: 2,
    mb: 0.5,

    "&:hover": {
      background:
        "rgba(200,169,107,0.12)",
    },
  }}
>
  <ListItemIcon>
    <GavelOutlinedIcon
      sx={{
        color: "#C8A96B",
      }}
    />
  </ListItemIcon>

  <ListItemText
    primary="Terms & Services"
  />
</ListItemButton>

      <ListItemButton
        sx={{
          mx: 1,
          borderRadius: 2,
          mb: 0.5,

          "&:hover": {
            background:
              "rgba(200,169,107,0.12)",
          },
        }}
      >
        <ListItemIcon>
          <SupportAgentOutlinedIcon
            sx={{
              color: "#C8A96B",
            }}
          />
        </ListItemIcon>

        <ListItemText primary="Contact Admin" />
      </ListItemButton>

      <Divider
        sx={{
          my: 2,
          borderColor:
            "rgba(200,169,107,0.15)",
        }}
      />

      <ListItemButton
        sx={{
          mx: 1,
          borderRadius: 2,
          mb: 0.5,

          "&:hover": {
            background:
              "rgba(200,169,107,0.12)",
          },
        }}
      >
        <ListItemIcon>
          <LoginOutlinedIcon
            sx={{
              color: "#C8A96B",
            }}
          />
        </ListItemIcon>

        <ListItemText primary="Login" />
      </ListItemButton>

      <ListItemButton
        sx={{
          mx: 1,
          borderRadius: 2,

          "&:hover": {
            background:
              "rgba(200,169,107,0.12)",
          },
        }}
      >
        <ListItemIcon>
          <PersonAddAltOutlinedIcon
            sx={{
              color: "#C8A96B",
            }}
          />
        </ListItemIcon>

        <ListItemText primary="Register" />
      </ListItemButton>

    </List>

    {/* FOOTER */}

    <Box
      sx={{
        mt: "auto",
        p: 2,
        textAlign: "center",
        borderTop:
          "1px solid rgba(200,169,107,0.15)",
      }}
    >
      <Typography
        sx={{
          color: "#C8A96B",
          fontSize: "0.8rem",
        }}
      >
        NUKIA v1.0
      </Typography>
    </Box>
  </Box>
</Drawer>
        {/* ================= HERO SECTION ================= */}

        <Container
          sx={{
            mt: 5,
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* HERO ANIMATION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* HERO TEXT */}

            <Typography
              variant="h4"
              sx={{
                mb: 2,
                color: "#C8A96B",
 fontFamily: "Lavishly Yours, cursive",          
      fontWeight: 600,
                letterSpacing: 3,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                textAlign: "center",
              }}
            >
              Hi
              <Box
                component="span"
                sx={{
                  display: "inline-block",

                  animation: "wave 1.8s infinite",

                  transformOrigin: "70% 70%",

                  "@keyframes wave": {
                    "0%": {
                      transform: "rotate(0deg)",
                    },

                    "10%": {
                      transform: "rotate(14deg)",
                    },

                    "20%": {
                      transform: "rotate(-8deg)",
                    },

                    "30%": {
                      transform: "rotate(14deg)",
                    },

                    "40%": {
                      transform: "rotate(-4deg)",
                    },

                    "50%": {
                      transform: "rotate(10deg)",
                    },

                    "60%": {
                      transform: "rotate(0deg)",
                    },

                    "100%": {
                      transform: "rotate(0deg)",
                    },
                  },
                }}
              >
              <AutoAwesomeIcon/>
              </Box>
            </Typography>

            {/* TITLE */}

            <Typography
              variant="h5"
              sx={{
                mb: 2,
                 fontFamily: "Inter, sans-serif",  
              }}
            >
              {t.title}
            </Typography>

            {/* SUBTITLE */}

            <Typography
              sx={{
                mb: 5,
                color: "gray",
                maxWidth: 600,
                margin: "0 auto",
                fontSize: "1rem",
              }}
            >
              {t.subtitle}
            </Typography>
          </motion.div>

          {/* ================= SEARCH SECTION ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <div
              style={{
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              {/* SEARCH BAR */}

              <SearchBar
                value={search}
                setValue={setSearch}
                placeholder={t.search}
              />

              {/* LOCATION SELECT */}

              <div
                style={{
                  marginTop: 15,
                }}
              >
                <LocationSelect
                  location={location}
                  setLocation={setLocation}
                  locations={locations}
                />
              </div>
            </div>
          </motion.div>
        </Container>

        {/* ================= FEATURED CATEGORIES  SECTION ================= */}

<FeaturedCategories
  categories={categories}
  selectedCategory={
    selectedCategory
  }
  setSelectedCategory={
    setSelectedCategory
  }
/>


        {/* ================= RESULTS SECTION ================= */}

        <Container
          sx={{
            mt: 1,
            
          }}
        >
          {/* LOADING */}

          <FeaturedProducts
  products={featuredProducts}
/>

          {loading ? (
            <div
              style={{
                textAlign: "center",
                marginTop: 10,
              }}
            >
              <CircularProgress />

              <Typography
                sx={{
                  mt: 2,
                }}
              >
                {t.loading}
              </Typography>
            </div>
          ) : shops.length > 0 ? (
            <>
              {/* RESULTS COUNT */}

              <Typography
                sx={{
                  mb: 1,
                  color: "gray",
                }}
              >
                Found {shops.length} perfume shops
              </Typography>

              {/* SHOP CARDS */}

              {shops.map((shop) => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </>
          ) : (
            <Box
              sx={{
                textAlign: "center",
                mt: 10,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "gray",
                  mb: 1,
                  fontFamily: "Inter, sans-serif", 
                }}
              >
                😔 No perfume shops found
              </Typography>

              <Typography
                sx={{
                  color: "gray",
                }}
              >
                Try another perfume name or location
              </Typography>
            </Box>
          )}
        </Container>

        {/* ================= FOOTER ================= */}

        <Footer />
      </div>
    </ThemeProvider>}/>
    

 {/* ABOUT PAGE */}
    <Route
      path="/about"
      element={<AboutUs />}
    />

    {/* TERMS PAGE */}
    <Route
      path="/terms"
      element={<TermsServices />}
    />

    </Routes>
  );
}

export default App;
