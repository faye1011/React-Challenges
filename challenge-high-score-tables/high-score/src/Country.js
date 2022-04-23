function Country(props) {
  return (
    <div className="country-score">
      <h1> High Scores: </h1>
      <p>{props.country}</p>
      <p>{props.person}</p>
      <p>{props.score}</p>
      <p>{props.secondScore}</p>
    </div>
  );
}

export default Country;
