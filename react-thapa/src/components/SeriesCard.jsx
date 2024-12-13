export const SeriesCard = ({curEle}) =>{
    const {id,img_url,name,rating,description,genre,cast,watch_url} = curEle
    return (
        <li key={id}>
            <div>
                <img src={img_url} alt={name} width="40%" height="50%" />
            </div>
            <h2>Name:{name} </h2>
            <h3>Rating: {rating} </h3>
            <p>Summary:{description}</p>
            <p>Genre:{genre}</p>
            <p>Cast:{cast}</p>
            <a href={watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    );

}