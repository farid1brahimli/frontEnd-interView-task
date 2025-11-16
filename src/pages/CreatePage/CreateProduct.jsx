import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.scss"

const CreateProduct = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      image: "",
      description: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      price: Yup.number().required("Price is required"),
      image: Yup.string().url("Enter a valid URL").required("Image is required"),
      description: Yup.string().required("Description is required"),
    }),

    onSubmit: async (values) => {
      try {
        await axios.post("https://fakestoreapi.com/products", values);
        alert("Product added successfully!");
        navigate("/", { state: values });
      } catch (error) {
        console.log(error);
        alert("Error adding product");
      }
    },
  });

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>

      <form onSubmit={formik.handleSubmit} className="add-form">

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title && <p className="err">{formik.errors.title}</p>}

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {formik.errors.price && <p className="err">{formik.errors.price}</p>}

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
        {formik.errors.image && <p className="err">{formik.errors.image}</p>}

        <textarea
          name="description"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.errors.description && (
          <p className="err">{formik.errors.description}</p>
        )}

        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default CreateProduct;
