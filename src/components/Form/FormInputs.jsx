import { useState } from "react";
import "./FormInputs.css";
import useHttp from "../../hooks/use-http";
const initialValues = {
  title: "",
  price: "",
  image: "",
  category: "",
};

const FormInputs = ({ onAddProduct }) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const { isLoading, error, sendRequest: sendProductRequest } = useHttp();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const createProduct = () => {
    const generatedId = initialValues.title;
    const createdProduct = { id: generatedId, ...inputValues };
    onAddProduct(createdProduct);
    setInputValues(initialValues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, ...rest } = inputValues;
    const newData = { ...rest, img: image };
    sendProductRequest(
      {
        url: "https://my-pos-application-api.onrender.com/api/products/create-product",
        method: "POST",
        body: newData,
        headers: {
          "Content-Type": "application/json",
        },
      },
      createProduct(newData)
    );
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-title">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          onChange={handleInputChange}
          value={inputValues.title}
        />
      </div>
      <div className="form-price">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          required
          name="price"
          onChange={handleInputChange}
          value={inputValues.price}
        />
      </div>
      <div className="form-category">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          required
          onChange={handleInputChange}
          value={inputValues.category}
        />
      </div>
      <div className="form-img">
        <label htmlFor="img">Image Url</label>
        <input
          id="img"
          type="text"
          name="image"
          required
          onChange={handleInputChange}
          value={inputValues.image}
        />
      </div>
      <button className="button">Add Product</button>
    </form>
  );
};

export default FormInputs;
