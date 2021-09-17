import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions';

function ProductListing() {
    const products = useSelector((state) => state);
    //dispatch will be redux hook that is usedispatch
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0").catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data.results));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("Products:", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing;