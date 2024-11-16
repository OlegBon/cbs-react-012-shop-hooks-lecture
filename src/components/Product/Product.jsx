import "./Product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  let [product, setProduct] = useState({});
  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data));
  }, [productId]);

  return (
    <div className="Product">
      <img src={product.image} alt="" />
      <div className="container">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>Category: {product.category}</h2>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
