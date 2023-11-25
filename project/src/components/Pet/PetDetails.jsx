const PetDetails = (props) => {
    const { title, plot, genres, runtime, cast, fullplot, released, directors, writers, imdb, tomatoes } = props.pet;

    return (
        <div className="pet-detail">
            <h1>{title}</h1>
            <p>{plot}</p>
            <p>Genres: {genres.join(", ")}</p>
            <p>Runtime: {runtime} minutes</p>
            <p>Cast: {cast.join(", ")}</p>
            <p>Full Plot: {fullplot}</p>
            <p>Released: {released}</p>
            <p>Directors: {directors.join(", ")}</p>
            <p>Writers: {writers.join(", ")}</p>
            <p>IMDB Rating: {imdb.rating}</p>
            <p>IMDB Votes: {imdb.votes}</p>
            <p>Rotten Tomatoes Viewer Rating: {tomatoes.viewer.rating}</p>
        </div>
    );
}

export default PetDetails;
