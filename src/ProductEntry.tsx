import React, { useState } from "react";
import { Product } from "./Product";
interface Props {
    product: Product;
}

const ProductEntry = ({ product }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [productContainerClassName, setProductContainerClassName] = useState(
        "productContainerClosed"
    );
    const handleExpand = () => {
        if (!isExpanded) {
            setIsExpanded(true);
        }

        setProductContainerClassName("productContainerOpen");
    };

    const handleCollapse = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsExpanded(false);
        setProductContainerClassName("productContainerClosed");
    };
    let productEntryContents = (<></>);
    const name = (
        <div className="productName">
            {product.name}
        </div>

    );
    const information = (
        <ul className="productInformation">
            {product.information.map((info, index) => (
                <li key={index}>{info}</li>
            ))}
        </ul>

    )
    const image = (
        <div className="productImageContainer">
            <img src={product.image} alt="Product" className="productImage" />
        </div>
    )

    if (isExpanded) {
        productEntryContents = (
                <>
                    {image}
                    {name}
                    {information}
                </>
        );
    } else {
        productEntryContents = (
            <>
                {image}
                {name}

            </>
        );
    }

    return (
        <div className={productContainerClassName} onClick={handleExpand}>
            {productEntryContents}
            {isExpanded && (
                <button onClick={handleCollapse}>See less</button>
            )}
        </div>
    );
};

export default ProductEntry;