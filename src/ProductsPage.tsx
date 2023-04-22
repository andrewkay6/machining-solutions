import productsList from "./ProductsList";
import ProductEntry from "./ProductEntry";
const ProductsPage = () => {

    return (
        // list all the products from productsList
        <div className="productsContainer page">
            {productsList.map((product, index) => {
                return (
                    <>
                        <ProductEntry product={product} key={index} />
                
                    </>
                );
            })}
        </div>
    );
};

export default ProductsPage;