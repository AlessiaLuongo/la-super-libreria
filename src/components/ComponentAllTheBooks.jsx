import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
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
        <Form
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
          <Form.Control
            type="text"
            placeholder="Search"
            className=" my-5"
            value={this.state.inputValue}
            onChange={(e) => {
              this.setState({
                ...this.state,
                inputValue: e.target.value,
              });
            }}
          />
          <Button type="submit">Cerca</Button>
        </Form>

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
