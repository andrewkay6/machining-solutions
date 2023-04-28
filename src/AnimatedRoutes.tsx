import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import ServicesPage from "./ServicesPage";

import { AnimatePresence } from 'framer-motion'

interface Props {
    setPageState: (pageState: string) => void;
}

const AnimatedRoutes = ({ setPageState } : Props) => {
    const location = useLocation();

    return (
        <AnimatePresence >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage setPageState={setPageState} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;