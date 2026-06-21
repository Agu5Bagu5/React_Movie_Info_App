import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import Loader from "./Loader";

const SearchedMovies = ({ isFetching, error }) => {
  const movies = useSelector((state) => state.movies.movies);

  if (error) {
    return (
      <h3>
        Error: <br />
        {error.message}
      </h3>
    );
  }

  if (isFetching) {
    return <Loader size={"70"} />;
  }

  return (
    <Row className="d-flex justify-content-center">
      {movies ? (
        movies.map((movie) => {
          if (movie.Type === "movie" && movie.Poster !== "N/A") {
            return (
              <Col sm={6} md={4} key={movie.imdbID} className="mb-5">
                <div className="w-100 d-flex justify-content-center">
                  <MovieItem movie={movie} />
                </div>
              </Col>
            );
          }
          return null;
        })
      ) : (
        <div className="h3" style={{ color: "#ececec" }}>
          Filem tidak ditemukan...
        </div>
      )}
    </Row>
  );
};

export default SearchedMovies;
