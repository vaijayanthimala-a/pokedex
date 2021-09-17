import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderlist = products.map((product) => {
        return (
            <div className="four wide column" key={product.url}>
                <Link to={`/product/${product.name}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image"></div>
                        <div className="content">
                            <div className="header">{product.name}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    });
    
    return <>{renderlist}</>;
}

export default ProductComponent;