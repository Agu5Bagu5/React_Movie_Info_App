import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../redux/slice/selected_item";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div className="movieItem">
      <Card
        className="bg-dark movieItemCard"
        onClick={() => dispatch(setSelectedItem(movie.imdbID))}
      >
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          className="movieImg"
        />
        <Card.Body>
          <Card.Title className="movieTtle text-light">
            {movie.Title}
          </Card.Title>
          <Card.Text className="movieYear">{movie.Year}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieItem;
