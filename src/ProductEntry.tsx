import React from "react";
import {Product} from "./Product";

interface Props {
    product: Product;
}
const ProductEntry = ({product} : Props) => {
    return (
        <div>
        <h1>Product Entry</h1>
        </div>
    );
    };

export default ProductEntry;
