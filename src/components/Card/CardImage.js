const CardImage = ({ imageURL }) => (
  <img
    src={imageURL}
    className="card-img-top mb-2"
    alt={Math.random()}
    style={{
      width: "265px",
      height: "250px",
    }}
  />
);

export default CardImage;
