import seriesData from "../api/seriesData.json"
import {SeriesCard} from "./SeriesCard"

function NetflixSeries() {
  return (
    <ul className="grid grid-three--cols">
    {seriesData.map((curEle)=>{
        return (
            <SeriesCard key={curEle.id} curEle={curEle} />
        );
        })
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
