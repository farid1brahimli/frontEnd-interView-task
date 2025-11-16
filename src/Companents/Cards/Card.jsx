import { RxCross2 } from "react-icons/rx";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, id, deleteCard }) => {
  const lastWord = title.trim().split(" ").pop();

  return (
      <div className="product-card">
        <div className="card-delete-btn">
          <RxCross2 style={{ fontSize: "2vw", cursor: "pointer" }} onClick={()=>deleteCard(id)}  />
        </div>
        <div className="card-info">
          <img src={image} alt={title} />
          <h2>{lastWord}</h2>
          <p>{price} $</p>
        </div>
        <div className="card-btns">
          <button><Link className="btn" to={`/product/${id}`} key={id}><span>Detail</span></Link></button>
          <button><Link className="btn" to={`/updateProduct/${id}`}><span>Update</span></Link></button>
        </div>
      </div>
  );
};

export default Card;
