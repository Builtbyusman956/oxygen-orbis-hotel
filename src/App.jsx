import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Dining from "./pages/Dining";
import Success from "./pages/Success"

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/rooms" element={<PageWrapper><Rooms /></PageWrapper>} />
        <Route path="/booking" element={<PageWrapper><Booking /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/dining" element={<PageWrapper><Dining /></PageWrapper>} />
        <Route path="/success" element={<PageWrapper><Success /></PageWrapper>} />

      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>

      <Navbar />

      <AnimatedRoutes />

      <Navbar2 />

    </Router>
  );
}

export default App;