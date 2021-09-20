const LoadingSpinner = (props) => {
  return (
    <i
      style={{ color: props.color || "#ff6699", fontSize: "10rem" }}
      className="fas fa-spinner movie-loading"></i>
  );
};

export default LoadingSpinner;
