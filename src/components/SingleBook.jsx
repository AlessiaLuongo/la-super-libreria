import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <Col key={this.props.libro.asin} xs={12} sm={10} md={6} lg={3}>
        <Card
          style={{
            height: "80%",
            border: `${
              this.props.selectedBook === this.props.libro.asin
                ? "3px solid red"
                : "none"
            }`,
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.libro.img}
            style={{ height: "60%" }}
            onClick={() => {
              this.props.setState({ selectedBook: this.props.libro.asin });
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between align-items-center card-bg">
            <Card.Title className="center">{this.props.libro.title}</Card.Title>
            <Card.Text className="center">
              {this.props.libro.category}
            </Card.Text>
            <Button className="price-button">€ {this.props.libro.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
