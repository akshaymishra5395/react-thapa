function NetflixSeries() {
  const name = "Thedrma";
  const rating = 8.2;
  const summary =
    "dakdhakjdahkjd akjhdakjdakjdh ajkdb akjdbakjdakjdbadajdg ahjdbajdadabdnabdjabda";
  const age = 19;

  const retGenre = () => {
    const genre = "romCom";
    return genre;
  };
  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };
  return (
    <div>
      <img src="test.jpg" alt="test.jpg" width="40%" height="50%"></img>
      <h1>Name:{name} </h1>
      <h2>Rating: {rating} </h2>
      <p>Summary:{summary}</p>
      <p>Genre:{retGenre()}</p>
      <button>{canWatch()}</button>
    </div>
  );
}
export default NetflixSeries;

export const Header = () => {
  return (
    <>
      <h1>Header</h1>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <p>thapa @coyright-rc</p>
    </>
  );
};
