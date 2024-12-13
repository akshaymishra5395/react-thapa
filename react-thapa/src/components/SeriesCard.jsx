export const SeriesCard = (props) =>{
    return (
        <li key={props.curEle.id}>
            <div>
                <img src={props.curEle.img_url} alt={props.curEle.name} width="40%" height="50%" />
            </div>
            <h2>Name:{props.curEle.name} </h2>
            <h3>Rating: {props.curEle.rating} </h3>
            <p>Summary:{props.curEle.description}</p>
            <p>Genre:{props.curEle.genre}</p>
            <p>Cast:{props.curEle.cast}</p>
            <a href={props.curEle.watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    );

}