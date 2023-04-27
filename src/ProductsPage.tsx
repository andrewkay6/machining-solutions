import productsList from "./ProductsList";
import ProductEntry from "./ProductEntry";
import { motion } from "framer-motion";

const ProductsPage = () => {

    return (    
            <motion.div className="productsContainer page"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                minHeight: "0vh"
            }}
            exit={{ display: "none"}}
        >
                <div className="pageTitle">
                    Products
                </div>
                
                {productsList.map((product, index) => {
                    return (
                        <ProductEntry product={product} key={index} />
                    );
                })}
            </motion.div>  
    );
};

export default ProductsPage;