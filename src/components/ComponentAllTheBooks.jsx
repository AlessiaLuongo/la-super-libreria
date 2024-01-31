import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import SingleBook from "./SingleBook";

class ComponentAllTheBooks extends Component {
  state = {
    inputValue: "",
    searchResult: [],
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Form
            className="my-3 d-flex justify-content-end"
            onSubmit={(e) => {
              e.preventDefault();
              this.setState({
                ...this.state,
                searchResult: this.props.libri.filter((libro) => {
                  return libro.title
                    .toLowerCase()
                    .includes(this.state.inputValue.toLowerCase());
                }),
              });
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
                value={this.state.inputValue}
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    inputValue: e.target.value,
                  });
                }}
              />

              <Col className="text-center">
                <Button type="submit">Cerca</Button>
              </Col>
            </Col>
          </Form>
        </Row>

        <Row className="g-3">
          {this.state.inputValue && this.state.searchResult.length > 0
            ? this.state.searchResult.map((libro) => {
                return <SingleBook libro={libro} />;
              })
            : this.props.libri.map((libro) => {
                return <SingleBook libro={libro} />;
              })}
        </Row>
      </Container>
    );
  }
}
export default ComponentAllTheBooks;
