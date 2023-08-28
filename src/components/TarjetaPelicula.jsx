
const TarjetaPelicula = ({movie1}) => {
    return (
        <div className="card">
            <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https:/via.placeholder.com/400"} alt={movie1.Title} />
            <div className="card-body">
                <h3>{movie1.Title}</h3>
                <p>{movie1.Year}</p>
                <p>{movie1.Type}</p>
            </div>
        </div>
    )
}

export default TarjetaPelicula
