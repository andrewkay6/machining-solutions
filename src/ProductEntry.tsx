import React, {useState} from "react";
import {Product} from "./Product";

interface Props {
    product: Product;
}
const ProductEntry = ({product} : Props) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="productContainer">
            <div className="productImageContainer">
                <img src={product.image} alt="Product" className="productImage" />
            </div>
            <div className="productTextContainer">
                <div className="productName">{product.name}</div>
            </div>
        </div>
    );
    };

export default ProductEntry;
