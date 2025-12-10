import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home";
import About from "../Pages/About";
import RealEstate from "../Pages/realestate";
import AutoMobile from "../Pages/Car";
import Music from "../Pages/music";
import PageTransition from "../components/animations/PageTransition";

// Wrapper component for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/real-estate"
          element={
            <PageTransition direction="up">
              <RealEstate />
            </PageTransition>
          }
        />
        <Route
          path="/auto-mobile"
          element={
            <PageTransition direction="down">
              <AutoMobile />
            </PageTransition>
          }
        />
        <Route
          path="/music"
          element={
            <PageTransition direction="right">
              <Music />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
