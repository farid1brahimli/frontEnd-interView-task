import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./DetailProduct.scss";

const DetailProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!products) return <p>Product not found</p>;

  const lastWord = products.title.trim().split(" ").pop();
  const firstMarkDescription = products.description.charAt(0).toUpperCase() + products.description.slice(1);
  const firstMarkCategory = products.category.charAt(0).toUpperCase() + products.category.slice(1);

  return (
    <div className="detail-page">
      <h1>Detail Page</h1>
      <div className="card-detail">
        <div className="card-info">
          <img src={products.image} width="250" />
          <h2>{lastWord}</h2>
          <p>Price: {products.price} $</p>
          <h3>Category</h3>
          <p>{firstMarkCategory}</p>
        </div>
        <div className="card-description">
          <h3>Description</h3>
          <p>{firstMarkDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
