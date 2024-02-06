import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";

const ComponentAllTheBooks = (props) => {
  // state = {
  //   inputValue: "",
  //   searchResult: [],
  // };
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Form
          className="my-3 d-flex justify-content-end"
          onSubmit={(e) => {
            e.preventDefault();
            // this.setState({
            //   ...this.state,
            const filteredBooks = props.libri.filter((libro) =>
              libro.title.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSearchResult(filteredBooks);
            // });
          }}
        >
          <Col
            xs={12}
            sm={10}
            md={6}
            lg={3}
            className=" d-flex justify-content-center"
          >
            <Form.Control
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={handleInput}
              // this.setState({
              //   ...this.state,
              //   inputValue: e.target.value,
              // });
            />

            <Col className="text-center">
              <Button type="submit">Cerca</Button>
            </Col>
          </Col>
        </Form>
      </Row>

      <Row className="g-3 justify-content-center">
        {inputValue && searchResult.length > 0
          ? searchResult.map((libro) => {
              return (
                <SingleBook
                  key={libro.asin}
                  libro={libro}
                  setSelectedBook={props.setSelectedBook}
                  selectedBook={props.selectedBook}
                />
              );
            })
          : props.libri.map((libro) => {
              return (
                <SingleBook
                  key={libro.asin}
                  libro={libro}
                  setSelectedBook={props.setSelectedBook}
                  selectedBook={props.selectedBook}
                />
              );
            })}
      </Row>
    </Container>
  );
};
export default ComponentAllTheBooks;
