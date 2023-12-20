import { useContext } from "react";

import { ProductItem } from "./ProductItem";
import { ProductContext } from "../../contexts/ProductContext";

import ListGroup from 'react-bootstrap/ListGroup';

export const ProductList = () => {
    const { products } = useContext(ProductContext);

    return (
        <div id="list-content">
            <ListGroup horizontal id="list-products">
                {products.map(product => (
                    <ListGroup.Item style={{ border: "none" }} key={product.productCode} >
                        <ProductItem {...product} />
                    </ListGroup.Item>
                ))
                }
            </ListGroup>
        </div>
    );
};