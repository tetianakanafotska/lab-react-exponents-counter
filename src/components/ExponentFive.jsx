const ExponentFive = ({ count }) => {
  const result = count ** 5;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
