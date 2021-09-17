import React, {useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";

function ProductDetail() {
    const product = useSelector((state) => state.product);
    const {productName} = useParams();
    const dispatch = useDispatch();
    console.log(productName);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${productName}`).catch((err) => {
            console.log("Err", err);
        });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if(productName && productName !== "") fetchProductDetail();
    },[productName]);
    return (
        <div className="ui grid container">
            <h1>{product.name} #{product.id}</h1><p/>
            <div>
            <img className="ui fluid image" src={product.sprites.front_default}/>
            </div>
        </div>
    );
}

export default ProductDetail;