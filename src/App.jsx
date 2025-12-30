import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import AccountModal from "./components/AccountModal.jsx";
import Cart from "./components/Cart.jsx";

import Hero from "./components/Hero.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import PurpleSection from "./components/PurpleSection.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [navbarBg, setNavbarBg] = useState("white");

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If user lands directly on a product page without a recent internal navigation,
    // redirect to home so the app restores to its default state after restart.
    const internalTs = sessionStorage.getItem("internalNav");
    const now = Date.now();
    const isRecent =
      internalTs &&
      !Number.isNaN(Number(internalTs)) &&
      now - Number(internalTs) < 30_000; // 30s

    if (location.pathname.startsWith("/product/") && !isRecent) {
      navigate("/", { replace: true });
      return;
    }

    // Clear the flag when navigating away from product pages
    if (!location.pathname.startsWith("/product/")) {
      sessionStorage.removeItem("internalNav");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    // Only track scroll on homepage
    if (location.pathname !== "/") {
      setNavbarBg("white");
      return;
    }

    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const productSection = document.querySelector(".product-section");

      if (!heroSection || !productSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const productRect = productSection.getBoundingClientRect();
      const navbarHeight = 60; // approximate navbar height

      // Check if hero section is at the top of viewport
      if (heroRect.top <= navbarHeight && heroRect.bottom > navbarHeight) {
        setNavbarBg("#27C96E");
      }
      // Check if product section is at the top
      else if (productRect.top <= navbarHeight) {
        setNavbarBg("white");
      }
      // Default to white
      else {
        setNavbarBg("white");
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onMenuClick={() => setMenuOpen(true)}
        onAccountClick={() => setAccountModalOpen(true)}
        onCartClick={() => setCartOpen(true)}
        bgColor={navbarBg}
      />

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      {accountModalOpen && (
        <AccountModal onClose={() => setAccountModalOpen(false)} />
      )}
      {cartOpen && <Cart cart={cart} onClose={() => setCartOpen(false)} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductList />
              <PurpleSection />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
      </Routes>
    </>
  );
}
