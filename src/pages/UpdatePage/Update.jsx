import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Update.scss";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

        const data = res.data;
        console.log(data);

        formik.setValues({
          image: data.image,
          title: data.title,
          category: data.category,
          price: data.price,
          description: data.description,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      category: "",
      price: "",
      description: "",
    },

    validationSchema: Yup.object({
      image: Yup.string()
        .url("Enter a valid URL")
        .required("Image is required"),
      title: Yup.string().required("Title is required"),
      category: Yup.string().required("Category is required"),
      price: Yup.number().required("Price is required"),
      description: Yup.string().required("Description is required"),
    }),

    onSubmit: async (values) => {
      try {
        await axios.patch(`https://fakestoreapi.com/products/${id}`, values);

        alert("Product updated successfully!");
        navigate("/");
      } catch (err) {
        console.log(err);
        alert("Error updating product");
      }
    },
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="update-form">
      <h2>Update Product</h2>

      <form onSubmit={formik.handleSubmit}>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
        {formik.errors.image && <p className="err">{formik.errors.image}</p>}

        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title && <p className="err">{formik.errors.title}</p>}

        <label>Category:</label>
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        {formik.errors.category && (
          <p className="err">{formik.errors.category}</p>
        )}

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {formik.errors.price && <p className="err">{formik.errors.price}</p>}

        <label>Description:</label>
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.description && (
          <p className="err">{formik.errors.description}</p>
        )}

        <button type="submit" className="update-btn">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
