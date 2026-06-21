import { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../redux/slice/movies";
import { useQuery } from "@tanstack/react-query";
import SearchedMovies from "./SearchedMovies";

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const [searchValue, setSearchValue] = useState("");

  const fetchMovies = async () => {
    if (searchValue.trim()) {
      const result = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=8056fda3`
      );
      const data = await result.json();
      return data.Search || null;
    }
    return [];
  };

  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  useEffect(() => {
    dispatch(setMovies(data));
  }, [data]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      refetch();
    }
  };

  return (
    <div className="listMovie">
      <div className="search w-100">
        <InputGroup className="me-5">
          <FormControl
            value={searchValue}
            type="Search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search some movie"
            className="bg-dark text-light"
          />
          <Button variant="dark" onClick={refetch}>
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </div>
      <div className="movieItems">
        <SearchedMovies isFetching={isFetching} error={error} />
      </div>
    </div>
  );
};

export default MoviesList;
