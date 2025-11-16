import "./SkeletonCard.scss";

const SkeletonCard = () => {
  return (
        <div className="card-skeleton">
          <div className="product-info">
            <div className="img"></div>
            <div className="h2"></div>
            <div className="p"></div>
          </div>
          <div className="product-buttons">
            <button></button>
            <button></button>
          </div>
        </div>
  );
};

export default SkeletonCard;
