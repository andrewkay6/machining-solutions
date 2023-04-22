import productsList from "./AllProducts";


const ProductsPage = () => {


    return (
        // list all the products from productsList
        <div className="productsContainer">
            {productsList.map((product, index) => {
                return (

                    <div className="productContainer" key={index}>
                        <div className="productImageContainer">

                            <img src={product.image} alt="Product" className="productImage" />
                        </div>
                        <div className="productTextContainer">
                            <div className="productName">{product.name}</div>

                            <div className="productDescription">{product.description}</div>
                            <div className="productInformation">{product.information}</div>
                        </div>
                    </div>

                );
            })}
        </div>
    );
};

export default ProductsPage;