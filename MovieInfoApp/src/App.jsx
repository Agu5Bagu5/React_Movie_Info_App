import { Container } from "react-bootstrap";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { useSelector } from "react-redux";

function App() {
  const selectedItem = useSelector((state) => state.selectedItem.item);
  return (
    <div>
      <div className="bg-img">
        <div className="dark-layer">
          <Container>
            <div>
              <Header />
            </div>
            <div>
              <MoviesList />
            </div>
          </Container>
          {selectedItem && <MovieDetails imdbID={selectedItem} />}
        </div>
      </div>
    </div>
  );
}

export default App;
