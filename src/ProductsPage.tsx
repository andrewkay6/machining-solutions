import productsList from "./ProductsList";
import ProductEntry from "./ProductEntry";

const ProductsPage = () => {

    return (    
            <div className="productsContainer page">
                <div className="pageTitle">
                    Products
                </div>
                
                {productsList.map((product, index) => {
                    return (
                        <ProductEntry product={product} key={index} />
                    );
                })}
            </div>  
    );
};

export default ProductsPage;