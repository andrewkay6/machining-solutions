import React, { useState } from "react";
import { Product } from "./Product";
import { motion } from "framer-motion";
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
    const showMore = (
        <div className="showMoreContainer">
            <div className="showMoreText">
                More info
            </div>
            <i className="arrow down"/>
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
                {showMore}

            </>
        );
    }

    return (
        <div className={productContainerClassName} onClick={handleExpand}>
            {productEntryContents}
            {isExpanded && (
                <div className="seeLessContainer" onClick={handleCollapse}>
                    {/* <button onClick={handleCollapse}>
                    See less
                    </button>  */}
                    <i className="arrow up"/>
                    <div className="seeLessText">
                        Hide
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductEntry;