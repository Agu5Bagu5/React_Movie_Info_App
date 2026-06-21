import { useState, useEffect, useRef } from "react";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../redux/slice/selected_item";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

const MovieDetails = ({ imdbID }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const dispatch = useDispatch();
  const cardArea = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  //fetching data
  const fetchDataDetails = async () => {
    const result = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=8056fda3`
    );
    const data = await result.json();
    return data;
  };

  const { data, isFetching, error } = useQuery({
    queryKey: ["details"],
    queryFn: fetchDataDetails,
  });

  useEffect(() => {
    if (data) {
      setMovieDetails(data);
    }
  }, [data]);
  //end fetching data

  //close system
  const detailsClickController = (e) => {
    if (e.target && cardArea.current.contains(e.target)) {
      return;
    }
    document.body.style.overflow = "auto";
    dispatch(setSelectedItem(null));
  };
  //end close system

  //star making
  const makeStars = () => {
    const realRating = movieDetails.imdbRating / 2;
    const roundedRating = Math.round(realRating * 2) / 2;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<i className="bi bi-star-fill" key={i}></i>);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<i className="bi bi-star-half" key={i}></i>);
      } else {
        stars.push(<i className="bi bi-star" key={i}></i>);
      }
    }
    return <abbr title={realRating ? `${realRating}/5` : "-"}>{stars}</abbr>;
  };
  //end star making

  return (
    <div
      onClick={detailsClickController}
      className="movieDetails d-flex justify-content-center align-items-top px-3"
    >
      <Card className="bg-dark" ref={cardArea}>
        {error ? (
          <div className="w-100 text-center">
            <h2>
              <span className="text-danger">Error:</span>
              <br />
              {error.message}
            </h2>
          </div>
        ) : isFetching ? (
          <Loader />
        ) : (
          <Row>
            <Col lg={4} md={6}>
              <Card.Img
                variant="top"
                src={movieDetails.Poster}
                className="movieDetailsImg"
              />
            </Col>
            <Col lg={8} md={6}>
              <Card.Body className="p-0">
                <Card.Title className="movieTtle text-light fw-bold">
                  {movieDetails.Title}
                </Card.Title>
                <ListGroup className="bg-dark mt-4">
                  <ListGroup.Item>
                    <span>Direktur:</span>
                    <br />
                    {movieDetails.Director == "N/A"
                      ? "-"
                      : movieDetails.Director}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Penulis:</span>
                    <br />
                    {movieDetails.Writer == "N/A" ? "-" : movieDetails.Writer}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Genre:</span>
                    <br />
                    {movieDetails.Genre == "N/A" ? "-" : movieDetails.Genre}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Sinopsis:</span>
                    <br />
                    {movieDetails.Plot == "N/A" ? "-" : movieDetails.Plot}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Col>
            <Card.Footer className="w-100 px-0 fs-5 px-3">
              <div className="stars me-auto">{makeStars()}</div>
              <div className="year ms-auto fw-light">{movieDetails.Year}</div>
            </Card.Footer>
          </Row>
        )}
      </Card>
      <Button className="bg-dark d-flex justify-content-center align-items-center">
        <i className="bi bi-x fs-2"></i>
      </Button>
    </div>
  );
};

export default MovieDetails;
