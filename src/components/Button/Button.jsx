import "./styles.css";

const Button = ({ onClick }) => (
  <button className="button-load-more" onClick={onClick}>
    Load more
  </button>
);

export default Button;
