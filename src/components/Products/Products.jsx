/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import products from "../../productData";
import ProductItem from "./ProductItem";
import "./Products.css";
import FormInputs from "../Form/FormInputs";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("products1231231", products);

  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  )).reverse();

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://my-pos-application-api.onrender.com/api/products/get-all"
      );
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const newData = data.map((item) => {
        return {
          id: item._id,
          name: item.title,
          amount: item.__v + 1,
          ...item,
        };
      });
      setProducts(newData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = <p>Found no products!</p>;
  if (products.length > 0) {
    content = productList;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <main className="products-wrapper">
      <FormInputs fetchProductsHandler={fetchProductsHandler} />
      <ul className="products">{content}</ul>
      <button className="button" onClick={fetchProductsHandler}>
        Fetch Products
      </button>
    </main>
  );
};

export default Products;
