import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ComponentMyNav from "./components/ComponentMyNav";
import ComponentFooter from "./components/ComponentFooter";
import ComponentWelcome from "./components/ComponentWelcome";
import ComponentAllTheBooks from "./components/ComponentAllTheBooks";
import horror from "../src/data/horror.json";
import CommentArea from "./components/CommentArea";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useState } from "react";

// import history from "../src/data/history.json";

const App = () => {
  // state = {
  //   selectedBook: null,
  // };
  const [selectedBook, setSelectedBook] = useState(null);

  const changeState = (asin) => {
    setSelectedBook(asin);
  };

  return (
    <div>
      <header>
        <ComponentMyNav />
      </header>

      <main className="main-bg">
        <Container>
          <Row>
            <ComponentWelcome />
          </Row>

          <Row>
            <Col xs={7} sm={8} md={8} lg={8}>
              <ComponentAllTheBooks
                libri={horror}
                setSelectedBook={changeState}
                selectedBook={selectedBook}
              />
            </Col>

            <Col xs={5} sm={4} md={4} lg={4}>
              {selectedBook && <CommentArea selectedBook={selectedBook} />}
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <ComponentFooter />
      </footer>
    </div>
  );
};

export default App;
