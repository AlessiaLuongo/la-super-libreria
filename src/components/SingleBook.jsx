import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };

  render() {
    return (
      <Col key={this.props.libro.asin} xs={12} sm={10} md={6} lg={3}>
        <Card
          style={{
            height: "80%",
            border: `${this.state.selectedBook ? "3px solid red" : "none"}`,
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.libro.img}
            style={{ height: "60%" }}
            onClick={() => {
              this.setState({ selectedBook: !this.state.selectedBook });
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between align-items-center card-bg">
            <Card.Title className="center">{this.props.libro.title}</Card.Title>
            <Card.Text className="center">
              {this.props.libro.category}
            </Card.Text>
            <Button className="price-button">€ {this.props.libro.price}</Button>
          </Card.Body>
          {this.state.selectedBook ? <CommentArea /> : ""}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
