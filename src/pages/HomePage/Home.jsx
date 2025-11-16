import { useEffect, useState } from "react";
import "../../styles/global.scss";
import "./Home.scss";
import Card from "../../Companents/Cards/Card";
import { Link } from "react-router-dom";
import SkeletonPage from "../../Companents/SkeletonPage/SkeletonPage";

const home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchProducts(params) {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div>
        <SkeletonPage />
      </div>
    );
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error} !</p>;
  }

  let findByTitle = (event) => {
    setInputValue(event.target.value);
  };

  let deleteCard = (id) => {
    let filteredArr = products.filter((item) => item.id !== id);
    const isDelete = window.confirm("Dəqiq?");
    if (isDelete) {
      setProducts([...filteredArr]);
    } else {
      window.alert("Yaxşı qutardın:)");
    }
  };

  return (
    <div className="home">
      <div className="header">
        <h1>Product Management App</h1>
        <form action=""></form>
        <input
          type="text"
          placeholder="Search title.."
          onChange={findByTitle}
        />
        <button className="add-btn">
          <Link className="btn" to={"/createProduct"}>
            <span>Add Product</span>
          </Link>
        </button>
      </div>
      <div className="card-container">
        {products
          .filter((item) =>
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              deleteCard={deleteCard}
            />
          ))}
      </div>
    </div>
  );
};

export default home;
