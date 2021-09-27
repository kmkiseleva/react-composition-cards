const Card = ({ style, children }) => {
  return (
    <div className="card align-self-start border-dark" style={style}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
