import seriesData from "../api/seriesData.json"

function NetflixSeries() {
  return (
    <ul>
    {seriesData.map((cur)=>{
        return (
            <li key={cur.id}>
                <div>
                    <img src={cur.img_url} alt={cur.name} width="40%" height="50%" />
                </div>
                <h2>Name:{cur.name} </h2>
                <h3>Rating: {cur.rating} </h3>
                <p>Summary:{cur.description}</p>
                <p>Genre:{cur.genre}</p>
                <p>Cast:{cur.cast}</p>
                <a href={cur.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </li>
        )})
    }
    </ul>
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
