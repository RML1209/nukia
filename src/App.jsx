import { useEffect, useMemo, useState } from "react";

import {
  Container,
  Typography,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

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
              }}
            >
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
                fontFamily: "Didot, Playfair Display, serif",
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
                👋
              </Box>
            </Typography>

            {/* TITLE */}

            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontFamily: "Playfair Display, serif",
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
            mt: 6,
            pb: 8,
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
                marginTop: 50,
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
                  mb: 3,
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
    </ThemeProvider>
  );
}

export default App;
